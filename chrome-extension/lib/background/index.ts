import 'webextension-polyfill';
import { schemaStorage } from '@extension/storage';
import { createRandom } from '@extension/shared';

const INSERT_CONTEXT_MENU_ID = 'dice-roll-context-menu-insert';

chrome.contextMenus.create({
  id: INSERT_CONTEXT_MENU_ID,
  title: 'Dice Roll - Insert',
  contexts: ['editable'],
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (tab?.id == null) return;
  if (info.menuItemId !== INSERT_CONTEXT_MENU_ID) return;

  const savedSchema = await schemaStorage.get();
  const { delimiter = '-', schema, suffix = '', prefix = '' } = savedSchema;
  const res = createRandom(schema, { delimiter, prefix, suffix });

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    func: (val: string) => {
      document.execCommand('insertText', false, val);
    },
    args: [res],
  });
});
