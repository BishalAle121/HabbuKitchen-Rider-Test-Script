module.exports =
{
    async clearText(key) {
        const element = find.byValueKey(key);
        await this.driver.elementClear(element);
      }
}