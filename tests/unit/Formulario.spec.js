import { shallowMount, mount } from '@vue/test-utils'
import Form from '@/components/Formulario.vue'

describe('Formulario.vue', () => {
  const wrapper = mount(Form)
  it('Válido busca sem username', () => {
    const wrapper = shallowMount(Form)
    wrapper.find("form").trigger("submit.prevent")
    
    expect(wrapper.find(".message").text()).toBe('Informe um username para pesquisar')
  })

  it('Valida username inexistente', () => {
    
    const wrapper = shallowMount(Form, {
      data() {
        return {
          user: 'devnetios02123',
          view_data: false,
          error: 'Username Invalido',
          state_error: true,
          result: []
        }
      }
    });
    
    expect(wrapper.find(".message").text()).toBe('Username Invalido');
  })

  it('Valida se a tabela com as informacoes aparece', () => {
    const lista = [{"id":148507479,"name":"-embedded_system_configurator","stars":0},
    {"id":148859967,"name":"anti-fraud_embedded_system_parking","stars":0},
    {"id":148505913,"name":"arduino_vehicle_recognition","stars":0},
    {"id":154999063,"name":"armario-iot","stars":0},
    {"id":190760939,"name":"Calculadora_estat-stica","stars":0},
    {"id":148245408,"name":"criptografia","stars":0},
    {"id":148545294,"name":"decrypt_msg_server","stars":0},
    {"id":148859380,"name":"embedded_data_extraction_application","stars":0},
    {"id":148859284,"name":"embedded_system_lcd","stars":0},
    {"id":182790422,"name":"Gerenciador-iot","stars":0},
    {"id":183479324,"name":"gerenciador-iotv1","stars":0},
    {"id":122214587,"name":"GerenciadorElvira","stars":0},
    {"id":203061795,"name":"github-request","stars":0},
    {"id":183480780,"name":"invoice_validation_system","stars":0},
    {"id":148535163,"name":"msg_encrypt.apk","stars":0},
    {"id":84574133,"name":"project001","stars":0},
    {"id":199461085,"name":"pywifi","stars":0},
    {"id":199471188,"name":"pywificontrol","stars":0},
    {"id":190760025,"name":"Sorteio","stars":0},
    {"id":146956674,"name":"TelaLogin","stars":0}];

    const wrapper = shallowMount(Form, {
      data() {
        return {
          user: 'devnetomartins',
          view_data: true,
          error: '',
          state_error: false,
          result: lista
        }
      }
    });

    //Valido para saber se existe toda a lista na tela
    for(var y = 0; y < lista.length; y++)
      expect(wrapper.html()).toContain(lista[y].name);

  })
  expect(wrapper.html()).toMatchSnapshot()
  //expect(wrapper.html()).toContain('Username')
  //expect(wrapper.find(".message").text()).toBe('Informe um username para pesquisar')
  //expect(wrapper.html()).toMatchSnapshot()
})