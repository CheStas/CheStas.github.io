import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rus: ['Ломать(ся)', 'Приносить', 'Строить', 'Гореть, сжигать', 'Покупать', 'Уметь, мочь', 'Ловить', 'Выбирать', 'Падать', 'Кормить', 'Приходить','Стоить', 'Ползать, красться', 'Резать','Делать', 'Рисовать', 'Мечтать, видеть сны','Пить', 'Ехать, везти', 'Есть, поедать', 'Драться, сражаться', 'Находить', 'Летать', 'Запрещать', 'Забывать', 'Получать, становиться', 'Давать','Идти','Расти, вырастать', 'Вешать, висеть', 'Прятать(ся)', 'Ударять', 'Держать, проводить', 'Причинять боль', 'Хранить', 'Стоять на коленях', 'Знать', 'Класть', 'Вести, руководить', 'Учить', 'Покидать', 'Давать взаймы', 'Позволять', 'Лежать', 'Зажигать свет', 'Терять', 'Делать(производить)', 'Означать', 'Встречать', 'Быть должным', 'Платить', 'Класть', 'Бросать, прекращать', 'Читать', 'Ехать верхом', 'Звонить', 'Вставать', 'Бежать', 'Сказать', 'Видеть'],
      eng: ['break', 'bring', 'build', 'burn', 'buy', 'can', 'catch', 'choose', 'fall', 'feed', 'come', 'cost', 'creep', 'cut', 'do', 'draw', 'dream','drink', 'drive', 'eat', 'fight', 'find', 'fly', 'forbid', 'forget', 'get', 'give','go','grow', 'hang', 'hide', 'hit', 'hold', 'hurt', 'keep', 'kneel', 'know', 'lay', 'lead', 'learn', 'leave', 'lend', 'let', 'lie', 'light', 'lose', 'make', 'mean', 'meet', 'must', 'pay', 'put', 'quit', 'read', 'ride', 'ring', 'rise', 'run', 'say', 'see'],
      eng2: ['broke', 'brought', 'built', 'burnt', 'bought', 'could', 'caught', 'chose', 'fell', 'fed', 'came', 'cost', 'crept', 'cut', 'did', 'drew', 'dreamt','drank', 'drove', 'ate', 'fought', 'found', 'flew', 'forbade', 'forgot', 'got', 'gave','went','grew', 'hung', 'hid', 'hit', 'held', 'hurt', 'kept', 'knelt', 'knew', 'laid', 'led', 'learnt', 'left', 'lent', 'let', 'lay', 'lit', 'lost', 'made', 'meant', 'met', 'had to', 'paid', 'put', 'quit', 'read', 'rode', 'rang', 'rose', 'ran', 'said', 'saw'],
      eng3: ['broken', 'brought', 'built', 'burnt', 'bought', 'been able', 'caught', 'chosen', 'fallen', 'fed', 'come', 'cost', 'crept', 'cut', 'done', 'drawn', 'dreamt','drunk', 'driven', 'eaten', 'fought', 'found', 'flown', 'forbidden', 'forgotten', 'got', 'given','gone','grown', 'hung', 'hidden', 'hit', 'held', 'hurt', 'kept', 'knelt', 'known', 'laid', 'led', 'learnt', 'left', 'lent', 'let', 'lain', 'lit', 'lost', 'made', 'meant', 'met', 'had to', 'paid', 'put', 'quit', 'read', 'ridden', 'rung', 'risen', 'run', 'said', 'seen'],
      index: 0,
      input1: {
        width: '27%',
        height: 30,
        padding: '5px 10px',
        outline: '0',
        border: '3px solid grey'
    },
      input2: {
        width: '27%',
        height: 30,
        padding: '5px 10px',
        outline: '0',
        border: '3px solid grey'
    },
      input3: {
        width: '27%',
        height: 30,
        padding: '5px 10px',
        outline: '0',
        border: '3px solid grey'
    }
    }
  }

  getRandomInt() {
    this.refs['eng'].value = ''
    this.refs['eng'].focus()
    this.refs['eng2'].value = ''
    this.refs['eng3'].value = ''
    this.setState({index: Math.floor(Math.random() * (this.state.rus.length - 0)) + 0})
    this.setState({
        input1: {
          width: '27%',
          height: 30,
          padding: '5px 10px',
          outline: '0',
          border: '3px solid grey'
      },
        input2: {
          width: '27%',
          height: 30,
          padding: '5px 10px',
          outline: '0',
          border: '3px solid grey'
      },
        input3: {
          width: '27%',
          height: 30,
          padding: '5px 10px',
          outline: '0',
          border: '3px solid grey'
      }
    })
  }
  checkAnswer() {
    console.log(this.state.eng[this.state.index])
    console.log(this.state.eng2[this.state.index])
    console.log(this.state.eng3[this.state.index])
    console.log(this.state.rus[this.state.index])

    if (this.refs['eng'].value.trim().toLowerCase() ===  this.state.eng[this.state.index]) {
        this.setState({
            input1: {
                width: '27%',
                height: 30,
                padding: '5px 10px',
                outline: '0',
                border: '3px solid green'
            }
        })
    } else {
        this.setState({
            input1: {
                width: '27%',
                height: 30,
                padding: '5px 10px',
                outline: '0',
                border: '3px solid red'
            }
        })
        this.refs['eng'].focus()
    }

    if (this.refs['eng2'].value.trim().toLowerCase() === this.state.eng2[this.state.index]) {
        this.setState({
            input2: {
                width: '27%',
                height: 30,
                padding: '5px 10px',
                outline: '0',
                border: '3px solid green'
            }
        })
    } else {
        this.setState({
            input2: {
                width: '27%',
                height: 30,
                padding: '5px 10px',
                outline: '0',
                border: '3px solid red'
            }
        })
        this.refs['eng2'].focus()
    }

    if (this.refs['eng3'].value.trim().toLowerCase() === this.state.eng3[this.state.index]) {
        this.setState({
            input3: {
                width: '27%',
                height: 30,
                padding: '5px 10px',
                outline: '0',
                border: '3px solid green'
            }
        })
    } else {
        this.setState({
            input3: {
                width: '27%',
                height: 30,
                padding: '5px 10px',
                outline: '0',
                border: '3px solid red'
            }
        })
        this.refs['eng3'].focus()
    }
  }
  componentDidMount() {
    // var that = this;
    // this.state.rus.forEach(function(el, index) {
    //   console.log(el, '---', that.state.eng[index], '---', that.state.eng2[index], '---', that.state.eng3[index])
    // })
    this.getRandomInt();
  }

  render() {
    const wrap = {
      display: 'flex',
      width: '80%',
      margin: '0 auto',
      flexDirection: 'column'
    }
    const h2 = {
      textAlign: 'center',
      margin: '20px 0 60px'
    }
    const inputWrap = {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: 30,
      margin: '20px auto'
    }
    const input = {
      width: '27%',
      height: 30,
      padding: '5px 10px',
      outline: '0',
      border: '3px solid transparent'
    }
    const button = {
      width: '15%',
      margin: '5px'
    }
    const buttonWrap = {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }

    return (
      <div style={wrap}>
        <h1 style={h2}>
          {this.state.rus[this.state.index]}
        </h1>
        <div style={inputWrap}>
          <input style={this.state.input1} ref="eng" type="text"/>
          <input style={this.state.input2} ref="eng2" type="text"/>
          <input style={this.state.input3} ref="eng3" type="text"/>
        </div>
        <div style={buttonWrap}>
          <button style={button} onClick={this.checkAnswer.bind(this)}>check</button>
          <button style={button} onClick={this.getRandomInt.bind(this)}>next</button>
        </div>
      </div>
    );
  }
}
