export const FEISHU_GROUP_DEEPLINK = 'https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=1ebkf5eb-70ee-4039-a615-e80a9fed9065'
export const FEISHU_GROUP_WEB_URL = 'https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=1ebkf5eb-70ee-4039-a615-e80a9fed9065'

export function openFeishuGroup(): Promise<boolean> {
  window.open(FEISHU_GROUP_DEEPLINK, '_blank')
  return Promise.resolve(true)
}

export function copyFeishuLink(): void {
  navigator.clipboard.writeText(FEISHU_GROUP_WEB_URL).catch(() => {
    const el = document.createElement('textarea')
    el.value = FEISHU_GROUP_WEB_URL
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  })
}
