import { object } from "underscore";
import defineApiParameters from "../DefineApiParameters";
import { getPastDateInDays } from "../DefineApiParameters";

 describe('testng getPastDateInDays',() => {
    it('checks output parameter', () => {
        const data = getPastDateInDays(2);
        expect(data).toBeDefined();
    })
 })
 describe('testing defineApiParameters',() => {
    it('checks defined API',() => {
        const data = defineApiParameters();
        console.log('data: ', data);
        expect(data).toBeDefined();
    })
 })