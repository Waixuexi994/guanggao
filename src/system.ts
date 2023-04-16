import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `微信公众号：书虫创客
- 网站以进行更改，现在网站不需要填写key即可使用，网站余额没了或者有其他问题添加书虫微信：SCFuYe003
- 关注微信公众号：书虫创客，可以了解ChatGPT以及AI最新咨询
- [[Shift]] + [[Enter]] 换行。开头输入 [[空格]] 跳出更多 预设。[[↑]] 可编辑最近一次提问。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
