interface GeneratePassProps {
    numberPass: number;
}

export default function generatePass({ numberPass }: GeneratePassProps) {

    let password: string = "";
    let characters: string = "AaYuIf@$#123456789<(%-=OMNJ";
    let passwordLength = numberPass;

    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length));
    }

    return password;
}