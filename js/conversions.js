

function getMorseFromChar(char) {
    switch(char.toLowerCase()) {
        // ALPHA
        case 'a':
            return C+B+B;
        case 'b':
            return C+A+B;
        case 'c':
            return C+B+A;
        case 'ç':
            return C+C+C+C;
        case 'd':
            return C+A;
        case 'e':
            return C+B;
        case 'f':
            return C+A+A;
        case 'g':
            return C+C+B+B;
        case 'ğ':
            return B+B+B+B;
        case 'h':
            return C+C;
        case 'ı':
            return A+A+A+A;
        case 'i':
            return C+C+C;
        case 'j':
            return C+A+C;
        case 'k':
            return C+C+B;
        case 'l':
            return A+B;
        case 'm':
            return A+A+A;
        case 'n':
            return A+B+B;
        case 'o':
            return A+C+B;
        case 'ö':
            return A+A+A+B;
        case 'p':
            return A+A+B;
        case 'q':
            return A+B+C;
        case 'r':
            return A+B+A;
        case 's':
            return B+B+B;
        case 'ş':
            return A+C+A+C;
        case 't':
            return B+A+C;
        case 'u':
            return B+C+A;
         case 'ü':
               return A+A+C+A;
        case 'v':
            return B+B+C;
        case 'w':
            return B;
        case 'x':
            return B+A+A;
        case 'y':
            return A;
        case 'z':
            return C;
        
        // NUM
        case '0':
            return C+C+C+A;
        case '1':
            return A+B+C+C;
        case '2':
            return A+B+C+A;
        case '3':
            return B+B+C+B;
        case '4':
            return A+C+C+A;
        case '5':
            return A+A+C+C;
        case '6':
            return C+C+B+A;
        case '7':
            return A+C+B+B;
        case '8':
            return B+A+B+B;
        case '9':
            return C+A+A+A;
        
        // SYM
        case '.':
            return A+A+B+A+B;
        case ',':
            return B+A+B+B+C;
        case '!':
            return C+B+C+C+B;
        case '?':
            return A+B+A+B+C;
        case ':':
            return A+A+A+C+C;
        case "'":
            return C+B+C+A+B;
        case ';':
            return B+C+B+A+A;
        
  
        // DEF
        default:
            return '';
    }
}

function getCharFromMorse(morseLetter) {
    // ALPHA
    if (morseLetter == (C+B+B)) return 'a';
        if (morseLetter == (C+A+B)) return 'b';
        if (morseLetter == (C+B+A)) return 'c';
        if (morseLetter == (C+C+C+C)) return 'ç';
        if (morseLetter == (C+A)) return 'd';
        if (morseLetter == (C+B)) return 'e';
        if (morseLetter == (C+A+A)) return 'f';
        if (morseLetter == (C+C+B+B)) return 'g';
        if (morseLetter == (B+B+B+B)) return 'ğ';
        if (morseLetter == (C+C)) return 'h';
        if (morseLetter == (A+A+A+A)) return 'ı';
        if (morseLetter == (C+C+C)) return 'i';
        if (morseLetter == (C+A+C)) return 'j';
        if (morseLetter == (C+C+B)) return 'k';
        if (morseLetter == (A+B)) return 'l';
        if (morseLetter == (A+A+A)) return 'm';
        if (morseLetter == (A+B+B)) return 'n';
        if (morseLetter == (A+C+B)) return 'o';
        if (morseLetter == (A+A+A+B)) return 'ö';
        if (morseLetter == (A+A+B)) return 'p';
        if (morseLetter == (A+B+C)) return 'q';
        if (morseLetter == (A+B+A)) return 'r';
        if (morseLetter == (B+B+B)) return 's';
        if (morseLetter == (A+C+A+C)) return 'ş';
        if (morseLetter == (B+A+C)) return 't';
        if (morseLetter == (B+C+A)) return 'u';
        if (morseLetter == (A+A+C+A)) return 'ü';
        if (morseLetter == (B+B+C)) return 'v';
        if (morseLetter == (B)) return 'w';
        if (morseLetter == (B+A+A)) return 'x';
        if (morseLetter == (A)) return 'y';
        if (morseLetter == (C)) return 'z';
        
    // NUM
    if (morseLetter == (C+C+C+A)) return '0';
        if (morseLetter == (A+B+C+C)) return '1';
        if (morseLetter == (A+B+C+A)) return '2';
        if (morseLetter == (B+B+C+B)) return '3';
        if (morseLetter == (A+C+C+A)) return '4';
        if (morseLetter == (A+A+C+C)) return '5';
        if (morseLetter == (C+C+B+A)) return '6';
        if (morseLetter == (A+C+B+B)) return '7';
        if (morseLetter == (B+A+B+B)) return '8';
        if (morseLetter == (C+A+A+A)) return '9';
        
    // SYM
    if (morseLetter == (A+A+B+A+B)) return '.';
        if (morseLetter == (B+A+B+B+C)) return ',';
        if (morseLetter == (C+B+C+C+B)) return '!';
        if (morseLetter == (A+B+A+B+C)) return '?';
        if (morseLetter == (A+A+A+C+C)) return ':';
        if (morseLetter == (C+B+C+A+B)) return "'";
        if (morseLetter == (B+C+B+A+A)) return ';';
        
    //
    // CATCHES
    if (morseLetter == '') return '';
    // DEF
    else return '#';
}
