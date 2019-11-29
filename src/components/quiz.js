import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import AnimButton from './animbutton';
const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {"quiz" : {
  "quiz1" : {
    "question1" : {
      "correctoption" : "option1",
      "options" : {
        "option1" : "ESTAR",
        "option2" : "SER",
      },
      "question" : "Obstrução do canal da uretra___"
    },
    "question2" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "ESTAR",
          "option2" : "SER",
        },
      "question" : "Gravidez ou parto___"
    },
    "question3" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "ESTAR",
          "option2" : "SER",
        },
      "question" : "Obesidade ____"
    },
    "question4" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "ESTAR",
          "option2" : "SER",
        },
      "question" : "Enfraquecimento dos músculos pélvicos ____"
    },
    "question5" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "ESTAR",
          "option2" : "SER",
        },
      "question" : "Irritação da bexiga ____"
    },
    "question6" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "ESTAR",
          "option2" : "SER",
        },
      "question" : "Infecção urinária ____"
    },
    // "question7" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Constipação ____"
    // },
    // "question8" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Medo, estresse e ansiedade ____"
    // },
    // "question9" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Suplementos vitamínicos ____"
    // },
    // "question10" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Medicamentos para doenças cadíacas ____"
    // },
    // "question11" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Sedativos e relaxantes musculares ____"
    // },
    // "question12" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Medicamentos para controle da pressão arterial ____"
    // },
    // "question13" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Lesões medulares ____"
    // },
    // "question14" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Doenças pulmonares ____"
    // },
    // "question15" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Câncer ____"
    // },
    // "question16" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Aumento do tamanho da próstata ____"
    // },
    // "question17" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Diabetes ____"
    // },
    // "question18" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Disposição genética ____"
    // },
    // "question19" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Parkinson ____"
    // },
    // "question20" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Tosse crônica em fumantes ____"
    // },
    // "question21" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Problemas neurológicos ____"
    // },
    // "question22" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Histerectomia ____"
    // },
    // "question23" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Idade avançada ____"
    // },
    // "question24" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Cirurgia de retirada do útero ____"
    // },
    // "question25" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "AVC ____"
    // },
    // "question26" : {
    //   "correctoption" : "option1",
    //   "options" : {
    //       "option1" : "ESTAR",
    //       "option2" : "SER",
    //     },
    //   "question" : "Alzheimer ____"
    // }
  }
}
}
export default class Quiz extends Component {
  constructor(props){
    super(props);
    this.qno = 0
    this.score = 0
 
    const jdata = jsonData.quiz.quiz1
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    this.state = {
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0
    }
 
  }
  prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++
 
      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish((this.score*100/26).toFixed())
     }
  }
  _answer(status,ans){
 
    if(status == true){
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
        if(ans == this.state.correctoption ){
          this.score += 1
        }
      }else{
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || ans == this.state.correctoption){
        this.score -= 1
       }
      }
 
  }
  render() {
    let _this = this
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      return (  <View key={k} style={{margin:10}}>
 
        <AnimButton countCheck={_this.state.countCheck} onColor={"#00a8ff"} effect={"tada"} _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]} />
 
      </View>)
    });
 
    return (
      <ScrollView style={{backgroundColor: '#F5FCFF',paddingTop: 10}}>
      <View style={styles.container}>
 
      <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>
 
      <View style={styles.oval} >
        <Text style={styles.welcome}>
          {this.state.question}
        </Text>
     </View>
        <View>
        { options }
        </View>
        <View style={{flexDirection:"row"}}>
 
        <TouchableOpacity onPress={() => this.next()} >
          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, backgroundColor:"#00a8ff"}}>
            <Text>next</Text>
          </View>
        </TouchableOpacity >
 
        </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
 
  oval: {
  width: width * 90/100,
  borderRadius: 20,
  backgroundColor: '#00a8ff'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});