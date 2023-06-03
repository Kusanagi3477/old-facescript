(() => {

    // データセット
    const $txt = document.getElementById("input");
    const $result = document.querySelector("[data-result]");
    const $run = document.querySelector("[data-run]");

    let errorFlag = false;

    let varName = ['iVal']
    let varVal = ['(._.)']

    let ifVal;
    let ifFlag = false;

    let timerFlag = false;

    let runResult;

    // 目次
    // ・値変換
    // ・演算
    // ・変数取り出し
    // ・乱数
    // ・少数切り捨て
    // ・実行

    // おみくじ
    /*

\(°∀°)q(k)p(O.O)(*n*)/('1')?=?/('4')
('?')d(d('k')b=_=/('1'))
(°O°)/('<大吉')
('?')d(d('k')b=_=/('1'))
(°O°)/('<やったね！')
('?')d(d('k')b=_=/('2'))
(°O°)/('<吉')
('?')d(d('k')b=_=/('2'))
(°O°)/('<いいね。')
('?')d(d('k')b=_=/('3'))
(°O°)/('<凶')
('?')d(d('k')b=_=/('3'))
(°O°)/('<そんな時もあるさ…')

    */

    // 一時停止
    function wait(milseconds) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, milseconds)
        });
    }

    // 値変換してJavaScriptで扱いやすいように
    const faceValChange = (val) => {
        if (val.substr(0, 4) === "/(\'<" && val.substr(val.length - 2, 2) === "\')") {
            return val.substr(4, val.length - 6);
        } else if (val.substr(0, 3) === "/(\'" && val.substr(val.length - 2, 2) === "\')") {
            if (isNaN(Number(val.substr(3, val.length - 5)))) {
                $result.innerText = $result.innerText + "(# ` ω’)q \"" + val + "\"\n";
                errorFlag = true;

                return "(’・ω・)";
            } else {
                return Number(val.substr(3, val.length - 5));
            }
        } else if (val.substr(0, 3) === "d(\'" && val.substr(val.length - 3, 3) === "\')b") {
            return faceVar(val);
        } else if (val.substr(0, 2) === "=(" && val.substr(val.length - 1, 1) === ")") {
            return faceCalculation(val.substr(2, val.length - 3));
        } else if (val.substr(0, 5) === "(*n*)") {
            return faceRandom(val.substr(5, val.length - 5));
        } else if (val.substr(0, 5) === "(O.O)") {
            return faceFloor(val.substr(5, val.length - 5));
        }
    }

    // 演算の判定・処理・結果を返す
    const faceCalculation = (val) => {
        for (let i = 0; i < val.length - 1; i++) {
            if (val.substr(i, 3) === "+=+") {
                if (faceValChange(val.substr(0, i)) === undefined || 
                    faceValChange(val.substr(i + 3, val.length)) === undefined
                ) {
                    return "l(?O?)∫";
                } else {
                    return faceValChange(val.substr(0, i)) + faceValChange(val.substr(i + 3, val.length));
                }

                break;
            } else if (val.substr(i, 3) === "-=-") {
                if (faceValChange(val.substr(0, i)) === undefined || 
                    faceValChange(val.substr(i + 3, val.length)) === undefined
                ) {
                    return "l(?O?)∫";
                } else {
                    return faceValChange(val.substr(0, i)) - faceValChange(val.substr(i + 3, val.length));
                }

                break;
            } else if (val.substr(i, 3) === "*=*") {
                if (faceValChange(val.substr(0, i)) === undefined || 
                    faceValChange(val.substr(i + 3, val.length)) === undefined
                ) {
                    return "l(?O?)∫";
                } else {
                    return faceValChange(val.substr(0, i)) * faceValChange(val.substr(i + 3, val.length));
                }

                break;
            } else if (val.substr(i, 3) === "/=/") {
                if (faceValChange(val.substr(0, i)) === undefined || 
                    faceValChange(val.substr(i + 3, val.length)) === undefined
                ) {
                    return "l(?O?)∫";
                } else {
                    return faceValChange(val.substr(0, i)) / faceValChange(val.substr(i + 3, val.length));
                }

                break;
            }
        }
    }

    // 変数取り出し
    const faceVar = (val) => {
        for (let i = 0; i < varName.length; i++) {
            if (varName[i] === val.substr(3, val.length - 6)) {
                return varVal[i];
            }
        }
    }

    // 乱数の生成
    const faceRandom = (val) => {
        for (let i = 0; i < val.length; i++) {
            if (val.substr(i, 3) === "?=?") {
                return Math.random() * ( faceValChange(val.substr(0, i)) - faceValChange(val.substr(i + 3, val.length - (i + 3))) ) + faceValChange(val.substr(i + 3, val.length - (i + 3)));
            }
        }
    }

    // 小数点切り捨て
    const faceFloor = (val) => {
        return Math.floor(faceValChange(val));
    }

    // 命令の判定・実行
    const faceChange = (face) => {
        if (face.substr(0, 5) === "(°O°)") {
            $result.innerText = $result.innerText + String(faceValChange(face.substr(5, face.length - 2))) + "\n";
        } else if (face.substr(0, 8) === "\\(°∀°)q(") {
            for (let i = 9; i < face.length - 1; i++) {
                if (face.substr(i, 2) === ")p") {
                    if (varName.includes(face.substr(8, i - 8))) {
                        $result.innerText = $result.innerText + "( ; ° Д°) \"" + face.substr(8, i - 8) + "\"\n";
                        errorFlag = true;
                    } else {
                        varName.push(face.substr(8, i - 8));
                        varVal.push(faceValChange(face.substr(i + 2, face.length)));
                    }

                    break;
                }
            }
        } else if (face.substr(0, 5) === ":Dd(\'") {
            for (let i = 5; i < face.length - 1; i++) {
                if (face.substr(i, 3) === "\')b") {
                    if (varName.includes(face.substr(5, i - 5))) {
                        varVal[varName.indexOf(face.substr(5, i - 5))] = face.substr(i + 3, face.length);
                    }

                    break;
                }
            }
        } else if (face.substr(0, 6) === "(\'-\')?") {
            varVal[varName.indexOf('iVal')] = "/(\'<" + prompt(faceValChange(face.substr(6, face.length - 6))) + "\')";
        } else if (face.substr(0, 7) === "(,,°Д°)") {
            $result.innerText = "";
        } else if (!(face.substr(0, 5) === "(-#-)")) {
            $result.innerText = $result.innerText + "(?o?)∫ \"" + face + "\"\n";
        }
    }

    // Runボタンが押された時
    $run.addEventListener('click', () => {
        $result.textContent = "";
        varName = ['iVal'];
        varVal = ['(-n-)'];
        errorFlag = false;
        ifFlag = false;
        timerFlag = false;
        async function run() {
            for (let i = 0; i < $txt.value.split(/\r*\n/).length; i++) {
                if (!(timerFlag)) {
                    if ($txt.value.split(/\r\n|\r|\n/)[i].substr(0, 7) === "('?')d(") {
                        ifVal = $txt.value.split(/\r\n|\r|\n/)[i];
                        for (let i = 0; i < ifVal.substr(0, ifVal.length - 1).length; i++) {
                            if (ifVal.substr(i, 3) === "=_=") {
                                if (faceValChange(ifVal.substr(7, i - 7)) === faceValChange(ifVal.substr(i + 3, ifVal.length - ( i + 3 + 1 )))) {
                                    ifFlag = true;
                                } else {
                                    ifFlag = false;
                                }
        
                                break;
                            }
                            if (ifVal.substr(i, 3) === ">_>") {
                                if (faceValChange(ifVal.substr(7, i - 7)) > faceValChange(ifVal.substr(i + 3, ifVal.length - ( i + 3 + 1 )))) {
                                    ifFlag = true;
                                } else {
                                    ifFlag = false;
                                }
        
                                break;
                            }
                            if (ifVal.substr(i, 3) === "<_<") {
                                if (faceValChange(ifVal.substr(7, i - 7)) < faceValChange(ifVal.substr(i + 3, ifVal.length - ( i + 3 + 1 )))) {
                                    ifFlag = true;
                                } else {
                                    ifFlag = false;
                                }
        
                                break;
                            }
                        }
                        if (ifFlag === false) {
                            while ($txt.value.split(/\r\n|\r|\n/)[i + 1].substr(0, 7) === "('?')d(") {
                                i++;
                            }
                            i++;
                        }
                    } else if ($txt.value.split(/\r\n|\r|\n/)[i].substr(0, 6) === "(;oДp)") {
                        await wait(faceValChange($txt.value.split(/\r\n|\r|\n/)[i].substr(6, $txt.value.split(/\r\n|\r|\n/)[i].length - 6)));
                    } else {
                        faceChange($txt.value.split(/\r\n|\r|\n/)[i]);
                    }
                    if (errorFlag) {
                        break;
                    }
                }
            }
        }
        runResult = run();
    });

})();