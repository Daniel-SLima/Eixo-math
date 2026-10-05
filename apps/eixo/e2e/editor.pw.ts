import { expect, test } from '@playwright/test'

test('validates an example and restores both lines after reload', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Carregar exemplo' }).click()

  await expect(page.locator('math-field').first()).toHaveJSProperty('value', '2(x+3)')
  await expect(page.locator('math-field').nth(1)).toHaveJSProperty('value', '2x+6')

  await page.getByRole('button', { name: 'Verificar equivalência' }).click()
  await expect(page.getByText('VALIDO', { exact: true })).toBeVisible()

  await page.reload()
  await expect(page.locator('math-field').first()).toHaveJSProperty('value', '2(x+3)')
  await expect(page.locator('math-field').nth(1)).toHaveJSProperty('value', '2x+6')
})

test('offers a focused editor and zoom controls on a narrow screen', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  await page.getByRole('button', { name: 'Ampliar área' }).first().click()
  await expect(page.locator('.shell')).toHaveClass(/editing-focus/)
  await expect(page.getByRole('button', { name: 'Concluir' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Ampliar expressão' })).toBeVisible()

  await page.getByRole('button', { name: 'Ampliar expressão' }).click()
  await expect(page.locator('.zoom-controls output')).toHaveText('115%')

  await page.getByRole('button', { name: 'Concluir' }).click()
  await expect(page.locator('.shell')).not.toHaveClass(/editing-focus/)
})
