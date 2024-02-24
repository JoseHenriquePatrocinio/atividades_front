<template>
    <body>

        <div>
            <div>
                <div>

                    <div>

                        <div>
                            <h3>Calculadora</h3>
                        </div>

                        <div>
                            <input type="text" id="result" placeholder="0" readonly>
                        </div>
                    </div>

                    <div>

                        <div>
                            <div>
                                <input type="button" value="del" id="del" @click="del">
                                <input type="button" value="(" @click="input('(')">
                                <input type="button" value=")" @click="input(')')">
                                <input type="button" value="mod" @click="input('mod')">
                                <input type="button" value="n" @click="input('n')">
                            </div>
                            <div>
                                <input type="button" value="7" @click="input('7')">
                                <input type="button" value="8" @click="input('8')">
                                <input type="button" value="9" @click="input('9')">
                                <input type="button" value="/" @click="input('/')">
                                <input type="button" value="R" @click="input('r')">
                            </div>
                            <div>
                                <input type="button" value="4" @click="input('4')">
                                <input type="button" value="5" @click="input('5')">
                                <input type="button" value="6" @click="input('6')">
                                <input type="button" value="x" @click="input('*')">
                                <input type="button" value="x²" @click="input('x²')">
                            </div>
                            <div>
                                <input type="button" value="1" @click="input('1')">
                                <input type="button" value="2" @click="input('2')">
                                <input type="button" value="3" @click="input('3')">
                                <input type="button" value="-" @click="input('-')">
                                <input type="button" value="x³" @click="input('x³')">
                            </div>
                            <div>
                                <input type="button" value="." @click="input('.')">
                                <input type="button" value="0" @click="input('0')">
                                <input type="button" value="%" @click="input('%')">
                                <input type="button" value="+" @click="input('+')">
                                <input type="button" value="x" @click="input('*')">
                            </div>
                            <div>
                                <input type="button" value="LIMPAR" id="reset" @click="reset">
                                <input type="button" value="=" id="equals" @click="calc">
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    data() {
        return {
            inputString: ""
        };
    },
    methods: {
        input(value) {
            this.inputString += value;
            document.getElementById('result').value = this.inputString;
        },
        del() {
            this.inputString = this.inputString.slice(0, -1);
            document.getElementById('result').value = this.inputString;
        },
        reset() {
            this.inputString = "";
            document.getElementById('result').value = "0";
        },
        calc() {
            try {
                const result = eval(this.inputString);
                document.getElementById('result').value = result;
                this.inputString = result.toString();
            } catch (error) {
                document.getElementById('result').value = "Error";
            }
        }
    }
};
</script>

<style scoped>
</style>
