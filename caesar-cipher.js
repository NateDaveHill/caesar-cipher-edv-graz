
    const caesar = (text, nr) => {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let c = text.charCodeAt(i);
            let cNum = c + nr;

            if (c >= 97 && c <= 122) {
                result += get_ciphered_ascii(cNum, 97);
            } else if (c >= 65 && c <= 90) {
                result += get_ciphered_ascii(cNum, 65);
            } else {
                result += String.fromCharCode(c);
            }
        }
        return result;
    };

    const get_ciphered_ascii = (cNum, range_start) => {
        const normalized = ((cNum - range_start + 26) % 26) + range_start;
        return String.fromCharCode(normalized);
    };

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("convert").addEventListener("click", () => {
            const userInput = document.querySelector("#userInput").value;
            const userShift = parseInt(document.querySelector("#userShift").value);
            const encrypted = caesar(userInput, userShift);
            document.querySelector("#result").textContent = encrypted;
        });
    });

    


