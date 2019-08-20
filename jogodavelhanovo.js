  function verifica(){
                    div1 = document.querySelector('#div1').innerHTML;
                    div2 = document.querySelector('#div2').innerHTML;
                    div3 = document.querySelector('#div3').innerHTML;
                    div4 = document.querySelector('#div4').innerHTML;
                    div5 = document.querySelector('#div5').innerHTML;
                    div6 = document.querySelector('#div6').innerHTML;
                    div7 = document.querySelector('#div7').innerHTML;
                    div8 = document.querySelector('#div8').innerHTML;
                    div9 = document.querySelector('#div9').innerHTML;
                    // verificações:
                    if((div1 != '') && (div2 != '') && (div3 != '') && (div1 == div2) && (div2 == div3)){
                        alert('Jogo encerrado!');
                    } else if((div4 != '') && (div5 != '') && (div6!= '') && (div4 == div5) && (div5 == div6)){
                        alert('Jogo encerrado!');
                    } else if((div7 != '') && (div8!= '') && (div9!= '') && (div7==div8) && (div8 == div9)){
                        alert('Jogo encerrado!');
                    } else if((div1!='') && (div4!='') && (div7!='') && (div1==div4) && (div4==div7)){
                        alert('Jogo encerrado!');
                    } else if((div2!='') && (div5!='') && (div8!='') && (div2==div5) && (div5==div8)){
                         alert('Jogo encerrado!');
                    } else if((div3!='') && (div6!='') && (div9!='') && (div3==div6) && (div6==div9)){
                         alert('Jogo encerrado!');
                    } else if((div1!='') && (div5!='') && (div9!='') && (div1==div5) && (div5==div9)){
                         alert('Jogo encerrado!');
                    } else if((div3 != '') && (div5!='') && (div7!='') && (div3==div5) && (div5==div7)){
                         alert('Jogo encerrado!');
                    }
                }