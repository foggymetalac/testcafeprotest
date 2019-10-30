import { Selector } from 'testcafe';

export default class SubMenu {

    readonly headerWrapper = Selector('.home-header-wrap');
    readonly headerTitle = this.headerWrapper.find('h1');

}
