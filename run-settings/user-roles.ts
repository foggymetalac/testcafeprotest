import { Role } from 'testcafe';
import Config from './config';

const regularAccUser = Role(Config.instance().rootAppUr, async t => {
}, { preserveUrl: true });

export default regularAccUser;
