# CSS Code Guidelines

:bangbang: Nur ein Entwurf :bangbang:

## CSS Methodologie

* BEM
* OOCSS
* SMACSS
* Atomic Design
* ITCSS

Atomic Design: atoms, molecules, organism, templates, pages


--> zunehmende Komplexität
base - HTML-Elemente, Mixins. Keine Verwenung von classes
components - Module, die nicht vom Zustand eines Parents abhängen, sondern in sich unabhängig sind.
patterns - Verschachtele Module, können auch Komponenten enthalten.
views - Module die von Seiten abhängen.

## Konventionen

### Formatierung

* **Selektoren**: mit **Bindestrichen** statt CamelCase
* **Einrückung**: mit **Tabs**
* **Einheiten**: Bevorzugte Units wie px, em, rem, Setzen der line-height. Tendenz: nur px oder bei Schriften auf REM gehen, um ggf bei Mediaqueries schnell verkleiner zu können. EM stinkt, wg Vererbung. Ggf. auch vw und vh.
* **Verschachtelung**: in SCSS i.d.R. drei Ebenen tief. Selektoren nicht aus mehr als drei Elementen
* **Media-Queries**: wie umsetzen?
* **Variablen**: welche Variablen in LESS/SCSS anlegen?
* **Reihenfolge** der Properties: nach dem Modell **Box–Text–Bg–Rest** 
* **important!**: vermeiden
* **Abstände**: Abstände von Blöcken per `.foo + .foo` und `marging/padding-top`
* **Specifity**: Sei bestrebt, die Verschachtelung so gering wie möglich zu halten, so flach wie möglich, um die Specifity so gering wie möglich zu halten.
* **Mixins/Extends**: Spezielle Benamung?
* **Mixins/Extends**: Wann Mixins, wann Extends??

### Umsetzungen

#### Icons

Als SVGs. SVG-Sprites mit `use`

#### Fonts



