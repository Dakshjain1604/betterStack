import {describe,it,expect} from "bun:test";
import axios from 'axios'
describe('Website gets created', () => { 
    it("website not created if url is not present",async()=>{
        try{
            await axios.post(`${BASE_URL}/website`,{

            })
            expect(false,"webiste created while it shouldn't")
        }catch(e){

        }
    })

    it("website is created if url is not present",async()=>{
        const response = await axios.post(`${BASE_URL}/website`,{
           url:"https://google.com"
        })
        expect(response.data.id).not.toBeNull();
    });
 })