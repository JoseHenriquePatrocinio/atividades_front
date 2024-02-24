<template>
    <body>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

        <h1>Perguntas Frequentes</h1>
        <div class="faq-container">
            <div class="faq active">
                <h3 class="faq-title">
                    Qual é a capital do Brasil presente em todas as festas de aniversário?
                </h3>

                <p class="faq-text">
                    Palmas.
                </p>

                <button class="faq-toggle">
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <div class="faq">
                <h3 class="faq-title">
                    O que é pequeno em Lisboa e grande no Brasil?
                </h3>
                <p class="faq-text">
                    A letra B (minúscula em Lisboa e maiúscula em Brasil).
                </p>
                <button class="faq-toggle">
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <div class="faq">
                <h3 class="faq-title">
                    Qual é a maneira orientada a objetos de se tornar rico?
                </h3>
                <p class="faq-text">
                    Herança.
                </p>
                <button class="faq-toggle">
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <div class="faq">
                <h3 class="faq-title">
                    Qual é a operadora que concorda sempre?
                </h3>
                <p class="faq-text">
                    Claro.
                </p>
                <button class="faq-toggle">
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <div class="faq">
                <h3 class="faq-title">
                    O que o açaí disse para os filhos?
                </h3>
                <p class="faq-text">
                    O último açaí fecha a porta.
                </p>
                <button class="faq-toggle">
                    <i class="fas fa-chevron-down"></i>
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    </body>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    font-family: 'Muli', sans-serif;
    background-color: white;
}

h1 {
    margin: 50px 0 30px;
    text-align: center;
}

.faq-container {
    max-width: 600px;
    margin: 0 auto;
}

.faq {
    background-color: transparent;
    border: 1px solid #9fa4a8;
    border-radius: 10px;
    margin: 20px 0;
    padding: 30px;
    position: relative;
    overflow: hidden;
    transition: 0.3s ease;
}

.faq.active {
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}

.faq.active::before,
.faq.active::after {
    content: '\f075';
    font-family: 'Font Awesome 5 Free';
    color: #2ecc71;
    font-size: 7rem;
    position: absolute;
    opacity: 0.2;
    top: 20px;
    left: 20px;
    z-index: 0;
}

.faq.active::before {
    color: #3498db;
    top: -10px;
    left: -30px;
    transform: rotateY(180deg);
}

.faq-title {
    margin: 0 35px 0 0;
}

.faq-text {
    display: none;
    margin: 30px 0 0;
}

.faq.active .faq-text {
    display: block;
}

.faq-toggle {
    background-color: transparent;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 0;
    position: absolute;
    top: 30px;
    right: 30px;
    height: 30px;
    width: 30px;
}

.faq-toggle:focus {
    outline: 0;
}

.faq-toggle .fa-times {
    display: none;
}

.faq.active .faq-toggle .fa-times {
    color: #fff;
    display: block;
}

.faq.active .faq-toggle .fa-chevron-down {
    display: none;
}

.faq.active .faq-toggle {
    background-color: #9fa4a8;
}
</style>