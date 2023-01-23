                                        /*___________________________________________*/  


let _bnt_send = document.querySelector('.send');
let _bnt_reset = document.querySelector('.reset');
let _weight_display = document.querySelector('.weight');
let _height_display = document.querySelector('.height');
let _msn_errors = document.querySelector('.MSN_ERRORS');
let _imc_display = document.querySelector('.IMC_DISPLAY');
let _bmi_list = document.querySelector('.IMC_BODY_DESC');

                                        /*___________________________________________*/  

let _arrow_pin = document.querySelector('.arrow_pin');
let _below = document.querySelector('.below');
let _normal = document.querySelector('.normal');
let _above = document.querySelector('.above');
let _danger = document.querySelector('.danger');
let _obesity_extreme = document.querySelector('.obesity_extreme');

                                        /*___________________________________________*/  

let _below_desc = document.querySelector('.below_desc');
let _normal_desc = document.querySelector('.normal_desc');
let _above_desc = document.querySelector('.above_desc');
let _danger_desc = document.querySelector('.danger_desc');
let _obesity_extreme_desc = document.querySelector('.obesity_extreme_desc');

                                        /*___________________________________________*/  

let _below_txt = document.querySelector('.below_txt');
let _normal_txt = document.querySelector('.normal_txt');
let _above_txt = document.querySelector('.above_txt');
let _danger_txt = document.querySelector('.obsi_mor_txt');
let _obesity_txt = document.querySelector('.obsi_txt');

                                        /*___________________________________________*/  


class IMC {

    constructor(weight_display, height_display){
        this.weight = weight_display;
        this.height = height_display;
    }

    formatted_height = (altura) =>{
        this.altura = altura;

        this.height.value = this.altura
        .replace(/\D/g, '')
        .replace(/(\d{1})(\d)/, '$1.$2')

    }   

    formatted_weight = (peso) => {
        this.peso = peso;
        
        this.weight.value = this.peso
            .replace(/\D/g, '')
            .replace(/^([\d]{2,3})([\d]{2})/g, '$1.$2')
    }

    calc_imc = () => {

        if(this.height.value.length < 2 || this.height.value == ''){
            
            this.styles_normal();
            _msn_errors.setAttribute('class', 'MSN_ERRORS_ANIMATED');
            _height_display.setAttribute('class', 'height_interaction');
            
            if(this.weight.value == '' || this.weight.value.length <= 3){
                _weight_display.setAttribute('class', 'weight_interaction');
            } else {
                _weight_display.setAttribute('class', 'weight');

            }
            
            return;
        
        } else {

            _msn_errors.setAttribute('class', 'MSN_ERRORS');
            _height_display.setAttribute('class', 'height');
            this.alturaResult = Number(this.height.value);

        }
                                        /*___________________________________________*/

        if(this.weight.value.length <= 3 || this.weight.value == ''){

            this.styles_normal();
            _msn_errors.setAttribute('class', 'MSN_ERRORS_ANIMATED');
            _weight_display.setAttribute('class', 'weight_interaction');

            return;

        } else {

            _msn_errors.setAttribute('class', 'MSN_ERRORS');
            _weight_display.setAttribute('class', 'weight');
            this.pesoResult = Number(this.weight.value);

        }
                                        /*___________________________________________*/

            this.result = this.pesoResult / (this.alturaResult * this.alturaResult);
            this.imc = this.result.toFixed(1);
            this.imc_graphic_levels();               

    }

    imc_graphic_levels = () => {

        if(this.imc < 18.5){

            _arrow_pin.setAttribute('class', 'below_arrow');
            _below.setAttribute('class', 'below_graphic');
            _normal.setAttribute('class', 'normal');
            _above.setAttribute('class', 'above');
            _danger.setAttribute('class', 'danger');
            _obesity_extreme.setAttribute('class', 'obesity_extreme');

            /*______________________________________*/
            
            _bmi_list.setAttribute('class', 'IMC_BODY_LIST');
            _normal_txt.setAttribute('class', 'IMC_DESCR span:nth-child(2)');
            _above_txt.setAttribute('class', 'IMC_DESCR span:nth-child(3)');
            _obesity_txt.setAttribute('class', 'IMC_DESCR span:nth-child(4)');
            _danger_txt.setAttribute('class', 'IMC_DESCR span:nth-child(5)');
            _below_txt.setAttribute('class', 'below_text');
            

            /*______________________________________*/
            
            _imc_display.innerHTML = this.imc;

        } else if(this.imc > 18.5 && this.imc < 24.9) {
            
            _arrow_pin.setAttribute('class', 'normal_arrow');
            _normal.setAttribute('class', 'normal_graphic');
            _below.setAttribute('class', 'below');
            _above.setAttribute('class', 'above');
            _danger.setAttribute('class', 'danger');
            _obesity_extreme.setAttribute('class', 'obesity_extreme');

            /*______________________________________*/
            
            _bmi_list.setAttribute('class', 'IMC_BODY_LIST');
            _below_txt.setAttribute('class', 'IMC_DESCR span:nth-child(1)');
            _above_txt.setAttribute('class', 'IMC_DESCR span:nth-child(3)');
            _obesity_txt.setAttribute('class', 'IMC_DESCR span:nth-child(4)');
            _danger_txt.setAttribute('class', 'IMC_DESCR span:nth-child(5)');
            _normal_txt.setAttribute('class', 'normal_text');

            /*______________________________________*/

            _imc_display.innerHTML = this.imc;

        } else if(this.imc > 25 && this.imc < 29.9){

            _arrow_pin.setAttribute('class', 'above_arrow');
            _above.setAttribute('class', 'above_graphic');
            _normal.setAttribute('class', 'normal');
            _below.setAttribute('class', 'below');
            _danger.setAttribute('class', 'danger');
            _obesity_extreme.setAttribute('class', 'obesity_extreme');

            /*______________________________________*/
            
            _bmi_list.setAttribute('class', 'IMC_BODY_LIST');
            _below_txt.setAttribute('class', 'IMC_DESCR span:nth-child(1)');
            _normal_txt.setAttribute('class', 'IMC_DESCR span:nth-child(2)');
            _obesity_txt.setAttribute('class', 'IMC_DESCR span:nth-child(4)');
            _danger_txt.setAttribute('class', 'IMC_DESCR span:nth-child(5)');
            _above_txt.setAttribute('class', 'above_text');

            /*______________________________________*/
            
            _imc_display.innerHTML = this.imc;

        } else if(this.imc > 30 && this.imc < 34.9){

            _arrow_pin.setAttribute('class', 'obesity_extreme_arrow');
            _obesity_extreme.setAttribute('class', 'obesity_extreme_graphic');
            _normal.setAttribute('class', 'normal');
            _below.setAttribute('class', 'below');
            _above.setAttribute('class', 'above');
            _danger.setAttribute('class', 'danger');

            /*______________________________________*/
            
            _bmi_list.setAttribute('class', 'IMC_BODY_LIST');
            _below_txt.setAttribute('class', 'IMC_DESCR span:nth-child(1)');
            _normal_txt.setAttribute('class', 'IMC_DESCR span:nth-child(2)');
            _above_txt.setAttribute('class', 'IMC_DESCR span:nth-child(3)');
            _danger_txt.setAttribute('class', 'IMC_DESCR span:nth-child(5)');
            _obesity_txt.setAttribute('class', 'obesity_text');

            /*______________________________________*/   

            _imc_display.innerHTML = this.imc;

        } else {
            
            _arrow_pin.setAttribute('class', 'danger_arrow');
            _danger.setAttribute('class', 'danger_graphic');
            _normal.setAttribute('class', 'normal');
            _below.setAttribute('class', 'below');
            _above.setAttribute('class', 'above');
            _obesity_extreme.setAttribute('class', 'obesity_extreme');

            /*______________________________________*/
            
            _bmi_list.setAttribute('class', 'IMC_BODY_LIST');
            _below_txt.setAttribute('class', 'IMC_DESCR span:nth-child(1)');
            _normal_txt.setAttribute('class', 'IMC_DESCR span:nth-child(2)');
            _above_txt.setAttribute('class', 'IMC_DESCR span:nth-child(3)');
            _obesity_txt.setAttribute('class', 'IMC_DESCR span:nth-child(4)');
            _danger_txt.setAttribute('class', 'danger_text')

            /*______________________________________*/

            _imc_display.innerHTML = this.imc;
        }
    }

    styles_normal = () => {
        _imc_display.innerHTML = '';
        _below.setAttribute('class', 'below');
        _above.setAttribute('class', 'above');
        _normal.setAttribute('class', 'normal');
        _danger.setAttribute('class', 'danger');
        _arrow_pin.setAttribute('class', 'arrow_pin');
        _weight_display.setAttribute('class', 'weight');
        _height_display.setAttribute('class', 'height');
        _bmi_list.setAttribute('class', 'IMC_BODY_DESC');
        _obesity_extreme.setAttribute('class', 'obesity_extreme');
    }

    clear_all_digits = () => {
        this.weight.value = '';
        this.height.value = '';
        _imc_display.innerHTML = '';
        _msn_errors.setAttribute('class', 'MSN_ERRORS');    
        _bmi_list.setAttribute('class', 'IMC_BODY_DESC');
    }
}


const BMI = new IMC(_weight_display, _height_display);

                                        /*___________________________________________*/  


_weight_display.addEventListener('input', (weight)=>{
    let peso = weight.target.value;
    BMI.formatted_weight(peso);
})

_height_display.addEventListener('input', (height)=>{
    let altura = height.target.value;
    BMI.formatted_height(altura);
})

_bnt_reset.addEventListener('click', ()=>{
    BMI.styles_normal();
    BMI.clear_all_digits();
})

_bnt_send.addEventListener('click', ()=>{
    BMI.calc_imc();
})

