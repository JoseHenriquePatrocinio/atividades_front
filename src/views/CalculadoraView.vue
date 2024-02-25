<template>
    <div class="calculator">
        <div class="display">
            <h3>Calculadora</h3>
            <input type="text" id="result" placeholder="0" readonly>
        </div>

        <div class="buttons">
            <div>
                <input type="button" value="del" @click="del" class="operator-btn">
                <input type="button" value="(" @click="input('(')" class="operator-btn">
                <input type="button" value=")" @click="input(')')" class="operator-btn">
                <input type="button" value="mod" @click="input('mod')" class="operator-btn">
                <input type="button" value="n" @click="input('n')" class="operator-btn">
            </div>
            <div>
                <input type="button" value="7" @click="input('7')" class="num-btn">
                <input type="button" value="8" @click="input('8')" class="num-btn">
                <input type="button" value="9" @click="input('9')" class="num-btn">
                <input type="button" value="/" @click="input('/')" class="operator-btn">
                <input type="button" value="R" @click="input('r')" class="operator-btn">
            </div>
            <div>
                <input type="button" value="4" @click="input('4')" class="num-btn">
                <input type="button" value="5" @click="input('5')" class="num-btn">
                <input type="button" value="6" @click="input('6')" class="num-btn">
                <input type="button" value="x" @click="input('*')" class="operator-btn">
                <input type="button" value="x²" @click="input('x²')" class="operator-btn">
            </div>
            <div>
                <input type="button" value="1" @click="input('1')" class="num-btn">
                <input type="button" value="2" @click="input('2')" class="num-btn">
                <input type="button" value="3" @click="input('3')" class="num-btn">
                <input type="button" value="-" @click="input('-')" class="operator-btn">
                <input type="button" value="x³" @click="input('x³')" class="operator-btn">
            </div>
            <div>
                <input type="button" value="." @click="input('.')">
                <input type="button" value="0" @click="input('0')" class="num-btn">
                <input type="button" value="%" @click="input('%')" class="operator-btn">
                <input type="button" value="+" @click="input('+')" class="operator-btn">
                <input type="button" value="x" @click="input('*')" class="operator-btn">
            </div>
            <div>
                <input type="button" value="LIMPAR" id="reset" @click="reset" class="reset-btn">
                <input type="button" value="=" id="equals" @click="calc" class="equals-btn">
            </div>
        </div>
    </div>
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
.calculator {
    max-width: 400px;
    margin: 50px auto;
    font-family: 'Arial', sans-serif;
    background-color: #f2f2f2; 
    border-radius: 10px; 
    padding: 20px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
}

.display {
    text-align: center;
}

#result {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    margin: -10px;
}

.buttons {
    margin-top: 20px;
}

input {
    width: 50px;
    height: 50px;
    font-size: 16px;
    margin: 5px;
    cursor: pointer;
}

.num-btn {
    background-color: #4CAF50;
    color: white;
}

.operator-btn {
    background-color: #008CBA;
    color: white;
}

.reset-btn {
    background-color: #FF9800;
    color: white;
    font-size: 10px;
}

.equals-btn {
    background-color: #E91E63;
    color: white;
}
</style>
