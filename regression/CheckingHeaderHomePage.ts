import regularAccUser from '../run-settings/user-roles';
import { HomePage } from '../page-objects/all-page-objects';

const homePage = new HomePage();
const fontSize = '55px';

fixture`Checking Header Label on Home Page`
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .useRole(regularAccUser);
    });


test('Navigate to home page of Protest Solutions. Font size is 55px', async t => {

    const headerStyle = await homePage.headerTitle.style;
    console.log('Size of Header on Protest home page is: ' + headerStyle['font-size']);

    await t
        .expect(headerStyle['font-size']).eql(fontSize, `Font size is not ${fontSize} !`)
        .expect(homePage.headerTitle.visible).ok();
});
