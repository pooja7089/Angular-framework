import {Pipe, PipeTransform} from '@angular/core';


@Pipe ({name:'searchFilter'})
export class SearchFilterPipe implements  PipeTransform {
    transform(_value: any,search: string):any {
        if(!search){return  -_value;}
        let soluion = _value.filter(v=> {
            if(!v) {return;}
            return v.toLowerCase0.indexOf(search.toLowerCase())!== -1;
        })
        return soluion;
    }
    trnnsform(value: string,character:string) :string {

        return value.replace(character, '');
    }
}