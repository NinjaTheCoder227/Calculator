<script>
    function appendNumber(number) {
        let display = document.getElementById('display');
        display.value += number;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function calculate() {
        let display = document.getElementById('display');
        try {
            display.value = eval(display.value);  // eval is simple but not safe for real apps
        } catch (e) {
            display.value = 'Error';
        }
    }
</script>
