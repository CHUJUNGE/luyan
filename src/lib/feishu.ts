export const FEISHU_GROUP_DEEPLINK = '替换为实际的飞书 deeplink'
export const FEISHU_GROUP_WEB_URL = '替换为备用网页链接'

export function openFeishuGroup(): Promise<boolean> {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = FEISHU_GROUP_DEEPLINK
    document.body.appendChild(iframe)

    const timeout = setTimeout(() => {
      document.body.removeChild(iframe)
      resolve(false)
    }, 2000)

    window.addEventListener(
      'blur',
      () => {
        clearTimeout(timeout)
        document.body.removeChild(iframe)
        resolve(true)
      },
      { once: true },
    )
  })
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
