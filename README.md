# NG Serve 在 Ivy 作用的情況下 在修改原本被ignore的檔案後不會重新被加入的 sample

## 操作方式

1. 將WriteADirective的 @Directive 行註解
2. 並且將service.module.ts中有 WriteADirective 的行也註解
3. 並啟動ng serve (已設定為預設建置)
4. 此時將顯示WriteADirective.ts檔案被ignore
5. 把剛剛註解的行都復原並儲存
6. 此時ng serve 會自動編譯儲存的檔案
7. 接著會顯示編譯成功
8. 瀏覽器上顯示的是 BC 編譯成功的情況下應該要顯示ABC

## 修復方式

必須將使用 WriteADirective的 app.component.html 也重新進行存檔(不用修改任何東西) 才會正常顯示

## 推測原因

再透過 ivy 的情況下 ng serve 只在一開始的時候進行
中間任何關聯必須要於相關的所有檔案都重新存檔才會正確產出
以上述的案例來說
WriteADirective 與 註冊的 service.module.ts 及 使用的 app.component.ts 都有關聯性
所以導致即便是其中一邊改變了 另外一邊沒有做出相對應的行為則一樣不會發現狀態已改變
而這個案例只會發生在需要 DI 的情境
根據我的推測 js DI 以angular 來說是將資訊寫進使用的那一方的建構中
一但被Ivy ignore 在使用的那一方就不存在 所以這樣的推論會與前述的現象相符
並且 Ivy 是將現有的 js 重新打包過程新的檔案來進行編譯 確實也符合可能會發生上述現象的作法
再加上 似乎於開發期間 因為編譯效能問題不會使用Ivy 將會直接迴避掉這樣的問題
所以 似乎不容易遇到

## 後續問題
如果 Ivy 在 dev 不啟動, 要如何迴避作法可能會被 Ivy ignore 又能可以實現期望的效果?