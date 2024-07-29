import 'webextension-polyfill';
import { schemaStorage } from '@extension/storage';
import { DEFAULT_SCHEMA, createRandom } from '@extension/shared';

const INSERT_CONTEXT_MENU_ID = 'dice-roll-context-menu-insert';
const COPY_RANDOM_SHORTCUT_COMMAND = 'command-copy-random-string';
const INSERT_RANDOM_SHORTCUT_COMMAND = 'command-insert-random-string';

chrome.contextMenus.create({
  id: INSERT_CONTEXT_MENU_ID,
  title: 'Dice Roll - Insert',
  contexts: ['editable'],
});

async function getRandomString(): Promise<string> {
  const savedSchema = await schemaStorage.get();
  const { delimiter = '-', schema, suffix = '', prefix = '' } = savedSchema;

  const filledSchema = schema.length > 0 ? schema : DEFAULT_SCHEMA;

  return createRandom(filledSchema, { delimiter, prefix, suffix });
}

function executeOnTab<T>(tabId: number, args: T, callback: (val: T) => void) {
  chrome.scripting.executeScript({
    target: { tabId, allFrames: true },
    func: callback,
    args: [args],
  });
}

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (tab?.id == null) return;
  if (info.menuItemId !== INSERT_CONTEXT_MENU_ID) return;

  const res = await getRandomString();

  executeOnTab(tab.id, res, val => {
    document.execCommand('insertText', false, val);
  });
});

chrome.commands.onCommand.addListener(async (command, tab) => {
  if (tab?.id == null) return;
  if (command === COPY_RANDOM_SHORTCUT_COMMAND) {
    const res = await getRandomString();
    executeOnTab(tab.id, res, val => {
      console.log('writing to clipboard', val);
      navigator.clipboard.writeText(val);
    });
  }

  if (command === INSERT_RANDOM_SHORTCUT_COMMAND) {
    const res = await getRandomString();
    executeOnTab(tab.id, res, val => {
      document.execCommand('insertText', false, val);
    });
  }
});
