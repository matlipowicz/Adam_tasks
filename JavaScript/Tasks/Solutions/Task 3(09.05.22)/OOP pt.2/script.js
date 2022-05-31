'use strict';

//! Ex.1

/*

Stwórz klasę, która będzie pełniła rolę wrappera (storage-a) konfiguracji połączeniowej z API. Klasa ta ma się nazywać MyRequest oraz przechowywać takie atrybuty jak: 
-	URL address
-	Method (np. “GET”)
-	API Token
Obiekt tej klasy ma posiadać gettery oraz settery do odpowiednich pól. Zadbaj o poprawną enkapsulację. 


Następnie stwórz klasę Sender, która będzie zawierała takie metody statyczne jak:
-	sendReq(request, destination), gdzie request to odpowiednio skonfigurowany obiekt wyżej utworzonej klasy; destination to obiekt niżej utworzonej klasy, do której będziemy kierowali request

Następnie stwórz klasę ApiService, która będzie symulowała działanie API serwisu. Klasa ta ma zawierać:

-	statyczne listy:

countries = [“Poland”, “Japan”, “Madagascar”, “Mali”, “Nepal”]
continents = [“European”, “Asia”, “Australia”, “Africa”, “Asia”]

-	statyczne pola:
key (pole to będzie weryfikowane z polem API Token z request)

-	metody: getCountries, getContinents z parametrem request
Metody te będą odbierały wysyłany przez Sender obiekt typu Request, wyciągały z niego API Token, porównywały z polem statycznym - key. Jeżeli wartości te będą identyczne, to sprawdzamy również, czy methodType również pobrany z request, ma wartość równą GET. Jeżeli wszystkie te warunki zostaną spełnione, to wówczas metody mają zwracać odpowiednie listy (countries/continents). W przeciwnym razie zwracana lista ma być pusta. 


*/

class MyRequest {
  address;
  #token;

  contructor(address, token) {
    this.address = address;
    this.#token = token;
  }

  GET() {}

  get token() {
    return this.#token;
  }

  get address() {
    return this.address;
  }
}
