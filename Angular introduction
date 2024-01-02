# Angular

#### Angular structure 
 

Une application Angular peut être vue comme une arborescence de components avec AppComponent comme component racine.

### Install<br>
`npm install -g @angular/cli`<br>
### Create project
`ng new snapface`
### launch the app 
```
cd snapface
ng serve --open
```
### Create component
`ng generate component face-snap`

Cette classe est déclarée avec un décorateur  `@Component`  à qui on passe un objet de configuration avec un sélecteur, un fichier de template et un fichier de styles.
Un décorateur en TypeScript permet, entre autres, d'apporter des modifications à une classe. Ici, le décorateur  `@Component`  vient ajouter tous les comportements nécessaires à l'utilisation de ce component dans l'application. Il est importé depuis le package  `@angular/core`. Tout se passe sous le capot, on n'a pas à s'en occuper !
Pour le template et les styles, c'est plutôt simple : on dit à Angular quels fichiers utiliser pour afficher notre component. Le sélecteur (avec le préfixe  app-  par défaut), c'est ce qui va nous permettre d'insérer ce component dans notre application.
Comme vous le savez, votre application est une arborescence de components avec AppComponent comme racine : c'est donc dans  app.component.html  qu'on va venir ajouter le sélecteur de notre nouveau component comme balise HTML :


Il y a des chances pour que votre IDE commence déjà à souligner en rouge le nom de vos attributs ici. En effet, si vous lisez l'erreur retournée, c'est parce que vous avez créé des propriétés sans les initialiser. Pour "promettre" à TypeScript qu'on va les initialiser, on peut ajouter un bang  !  à chaque propriété : 

Pour initialiser ces propriétés en suivant les best practices Angular, vous allez utiliser la méthode  `ngOnInit()`  (que vous aviez supprimée précédemment). Pour l'utiliser, votre component doit implémenter l'interface  OnInit  :

La string interpolation est la méthode la plus simple pour afficher le contenu d'une variable dans le template. Il suffit de mettre le nom de la variable à afficher entre doubles accolades `{{ }}` dans le HTML . Faisons-le maintenant avec les données de notre FaceSnap. Dans  face-snap.component.html  :


L'objectif de l'application Snapface est de partager des images. Il nous faut donc un moyen d'afficher dynamiquement des images ! L'approche dans ce genre de cas sera souvent que le serveur renvoie l'URL de l'image à afficher. Il nous faut donc un moyen de lier cette URL dynamique à l'attribut  src  d'une balise  `<img>`  : attribute binding !


## En résumé
*	On déclare les propriétés d'un component en haut de sa classe, et on les initialise dans la méthode  `ngOnInit()`
*	La méthode  `ngOnInit()`  est appelée une fois par instance de component au moment de la création de cette instance.
*	La string interpolation avec les doubles accolades  `{{ }}`  permet d'insérer la valeur d'une propriété TypeScript dans le template.
*	L'attribute binding permet de lier la valeur d'une propriété TypeScript à un attribut HTML, en mettant l'attribut entre crochets  `[]`  et en passant le nom de la propriété.


Il faut maintenant lier cette méthode au clic sur le bouton avec la liaison par événement, ou event binding. Là où vous avez utilisé des crochets pour lier aux attributs, vous allez utiliser des parenthèses  `()`  pour lier aux événements :
`<button (click)="onAddSnap()">Oh Snap!</button>`
 On utilise bien  `(click)`  et non  `(onclick)`  car on veut réagir à l'événement qui s'appelle "click" !

*	Pour lier une méthode à un événement d'un élément du template, mettez l'événement entre parenthèses ` ()`  et passez la méthode en argument ; ex. : `(click)="onClickButton()`"

Si vous avez des propriétés qui seront initialisées par les arguments passés au constructor comme ci-dessus, vous pouvez retirer leurs déclarations et initialisations, et leur ajouter simplement le modificateur  public  dans le  constructor  :


Vous allez maintenant utiliser l'attribute binding pour lier cet objet à la propriété personnalisée  faceSnap  de FaceSnapComponent dans  app.component.html  :
`<app-face-snap [faceSnap]="mySnap"></app-face-snap>`
`@Input()`  crée comme un attribut HTML auquel on peut lier une valeur, tout comme vous l'avez fait avec l'attribut  src  de l'élément image !


## En résumé
*	N'hésitez pas à créer vos propres types, sous forme de classe par exemple, pour faciliter la manipulation de données dans votre application.
*	Une propriété personnalisée est rendue injectable depuis l'extérieur grâce au décorateur  `@Input()`
*	Une propriété en  `@Input()` est utilisable comme n'importe quelle autre propriété : on peut en afficher les éléments, les modifier… 
*	On lie ensuite une valeur à cette propriété depuis le component parent avec l'attribute binding, c'est-à-dire le nom de la propriété entre crochets  `[]`  en passant la valeur entre les guillemets ; ex. : `[faceSnap]="mySnap"`

Mettez en place une structure dynamique
Dans une application moderne, il y aura des occasions où dans certains cas, vous voudrez afficher un élément, et dans d'autres non. Par le passé, on a utilisé plein de techniques pour atteindre cet objectif. Avec Angular, c'est extrêmement simple avec la directive*ngIf.
Une directive est une classe qui vient ajouter du comportement à l'élément sur lequel elle est posée. L'astérisque au début du nom  *ngIf  nous montre qu'il s'agit d'une directive structurelle, qui viendra donc toucher à la structure du document.
On passe à  *ngIf  la condition selon laquelle l'élément doit être ajouté. Ici, Angular évalue  faceSnap.location  comme étant "truthy" quand la propriété existe et qu'elle ne contient pas la chaîne vide (ou les valeurs  null,  false, ou  0, mais il s'agit ici d'une string). Elle est évaluée comme étant "falsey" quand la propriété retourne undefined, c'est-à-dire quand elle n'existe pas.
```
<p *ngIf="faceSnap.location">Photo prise à {{ faceSnap.location }}</p>
<p *ngIf="faceSnap.location === 'Paris'">
```

pour afficher uniquement les photos prises à Paris. On peut même mettre la directive  *ngIf  sur des components. Dans  app.component.html, on pourrait imaginer un filtre pour montrer uniquement les FaceSnaps ayant plus de 5  snaps  :

```
<app-face-snap [faceSnap]="mySnap" *ngIf="mySnap.snaps > 5"></app-face-snap>
<app-face-snap [faceSnap]="myOtherSnap" *ngIf="myOtherSnap.snaps > 5"></app-face-snap>
<app-face-snap [faceSnap]="myLastSnap" *ngIf="myLastSnap.snaps > 5"></app-face-snap>
```

## En résumé
*	Vous pouvez ajouter des propriétés optionnelles à une classe en y ajoutant un point d'interrogation  ?
*	Ajouter la directive  *ngIf  à un élément (qui peut aussi être un component) dit à Angular d'ajouter ou non cet élément au DOM selon la condition que vous lui passez, par exemple  <p *ngIf="size === 'large'">

`<app-face-snap *ngFor="let faceSnap of faceSnaps" [faceSnap]="faceSnap"></app-face-snap>`
Regardons de plus près ce qui se passe exactement avec cette syntaxe :
*	la directive  *ngFor  fonctionne un peu comme une boucle  for...of  , c'est-à-dire que, dans ce cas de figure, elle va itérer sur le tableau  faceSnaps  et vous exposer l'élément correspondant à chaque itération sous l'alias  faceSnap
*	vous associez ensuite l'élément du tableau à la propriété  faceSnap  du component.
En résumé
*	La directive  *ngFor  vous permet d'insérer un élément dans le DOM pour chaque élément dans un tableau.
*	La syntaxe  let element of array  vous donne accès à l'élément de chaque itération, vous permettant de l'injecter dans un component, par exemple.

Pour utiliser directement le nombre de snaps comme valeur pour le vert de la couleur de texte, vous pouvez utiliser la fonction CSS  rgb()  :
`<span [ngStyle]="{ color: 'rgb(0, ' + faceSnap.snaps + ', 0)' }">🤌 {{ faceSnap.snaps }}</span>`

`<div [ngClass]="{ 'class-name': condition }"></div>`


### En résumé
*	La directive  `[ngStyle]`  permet d'appliquer des styles qui dépendent de valeurs dynamiques, comme un texte qui, plus il y a de snaps, devient de plus en plus vert.
*	La directive  `[ngStyle]`  prend comme argument un objet où les clés correspondent aux styles CSS à modifier, et les valeurs aux valeurs que doivent prendre ces styles.
Rendez-vous au prochain chapitre pour appliquer des classes dynamiquement ! 

`[ngClass]`  prend un objet en argument, comme  `[ngStyle]`, mais dont le fonctionnement est différent :
*	les clés sont les noms de classe CSS à appliquer ;
*	les valeurs sont les conditions qui doivent être remplies pour que les classes correspondantes s'appliquent.
En gros :


On applique un pipe à une chaîne de caractères affichée avec la string interpolation. On rajoute le caractère pipe  |  puis le nom du pipe. Par exemple, si vous voulez afficher le titre des FaceSnap en majuscules, vous appliquez UpperCasePipe :
`<h2>{{ faceSnap.title | uppercase }}</h2>`
`<h2>{{ faceSnap.title | lowercase }}</h2>`
`<h2>{{ faceSnap.title | titlecase }}</h2>`


### En résumé
*	Un pipe permet de formater l'affichage d'une donnée sans modifier la donnée sous-jacente.
*	Angular fournit trois pipes pour modifier la casse affichée d'une chaîne de caractères : UpperCasePipe, LowerCasePipe, et TitleCasePipe pour les majuscules, les minuscules et le mélange type "titre".


Il est tout à fait possible d'utiliser DatePipe comme vous avez utilisé UpperCasePipe précédemment, et un formatage par défaut sera appliqué :
`<p>Mis en ligne le {{ faceSnap.createdDate | date }}</p>`

C'est mieux, mais c'est pas encore ça.
Pour configurer un pipe, on ajoute deux-points  :  puis généralement une chaîne de caractères qui définit la configuration. Angular nous propose quelques configurations prédéfinies pour DatePipe, comme par exemple  longDate  :
`<p>Mis en ligne le {{ faceSnap.createdDate | date: 'longDate' }}</p>`
 Le format `longDate`
Vous avez également la possibilité de créer vos propres configurations en passant une chaîne de caractères qui encode votre configuration souhaitée. Voici deux exemples :
`<p>Mis en ligne le {{ faceSnap.createdDate | date: 'dd/MM/yy, à HH:mm' }}</p>`
 Date personnalisée
`<p>Mis en ligne {{ faceSnap.createdDate | date: 'à HH:mm, le d MMMM yyyy' }}</p>`
 
[DatePipe](https://angular.io/api/common/DatePipe) 

Pour changer la locale de votre application en français, il faudra ajouter quelques lignes dans votre fichier  app.module.ts  :

```
providers: [
  { provide: LOCALE_ID, useValue: 'fr-FR'}
],
```

[i18n-common-format-data-locale](https://angular.io/guide/i18n-common-format-data-locale)


## En résumé
*	DatePipe permet de formater les dates, et sans configuration fournit un formatage par défaut.
*	DatePipe fournit des configurations prédéfinies avec des noms comme  short,  longDate  ou  mediumTime
*	DatePipe permet également de personnaliser totalement le format d'affichage des dates avec des chaînes de caractères qui encodent le format souhaité, par exemple  `'à HH:mm, le d MMMM yyyy'`
 Continuons dans la découverte des pipes avec un pipe qui vous permettra de formater des nombres selon les règles de locale de l'application. Il y en a trois :
*	DecimalPipe – facilite l'affichage de nombres avec des chiffres après la virgule (qui met une virgule plutôt qu'un point, par exemple).
*	PercentPipe – formate les chiffres en pourcentage.
*	CurrencyPipe – permet d'afficher des nombres sous forme de monnaie très facilement.

Si vous avez modifié la locale de votre application pour la passer en français, regardez ce qui se passe quand vous ajoutez DecimalPipe avec le mot-clé  number  :
`<p>{{ 4346234.36 | number }}</p>`

C'est déjà beaucoup mieux ! On peut aussi demander à DecimalPipe d'arrondir pour l'affichage, par exemple à l'entier le plus proche :
`<p>{{ 4346234.36 | number: '1.0-0' }}</p>`
La configuration signifie :
*	au moins un chiffre pour les entiers ;
*	minimum 0 chiffres après la virgule – maximum 0 chiffres (Angular arrondira donc à l'entier le plus proche).
Ce qui donne bien :
 
On peut aussi spécifier d'arrondir à un chiffre après la virgule en spécifiant un chiffre maximum après la virgule :
`<p>{{ 4346234.36 | number: '1.0-1' }}</p>`
 

Pour transformer des nombres entre 0 et 1 en pourcentage (ex. : 0.4 = 40 %), il suffit d'utiliser PercentPipe :
`<p>{{ 0.336 | percent }}</p>`
PercentPipe arrondit par défaut les pourcentages à l'entier le plus proche. Vous pouvez cependant le configurer de la même manière que DecimalPipe :
`<p>{{ 0.336 | percent: '1.0-1' }}</p>`
Quand les nombres dans votre application correspondent à des montants d'argent, CurrencyPipe facilite leur affichage. Si vous utilisez l'affichage par défaut : 
`<p>{{ 344.36 | currency }}</p>`
 En dollars
Angular présume par défaut que vous parlez de dollars, et donc affiche votre montant en dollars selon les règles de la locale de l'application.
Vous pouvez configurer la monnaie à afficher :
`<p>{{ 344.36 | currency: 'EUR' }}</p>`
 En euros, €

## En résumé
*	DecimalPipe (mot-clé  number ) vous permet d'afficher un nombre selon les règles de la locale de l'application.
*	PercentPipe affiche un nombre entre 0 et 1 sous forme de pourcentage, arrondi par défaut à l'entier le plus proche.
*	DecimalPipe et PercentPipe acceptent un argument de configuration sous la forme 'chiffresMinAvantVirgule.chiffresMinAprèsVirgule-chiffresMaxAprèsVirgule' ex. :  '1.0-1'
*	CurrencyPipe facilite l'affichage des montants d'argent, et accepte plusieurs arguments de configuration séparés par des deux-points  :


Vous allez maintenant créer un service qui va centraliser toutes les interactions avec les FaceSnaps, afin que tous les éventuels components de votre application dépendent des mêmes données.
Dans le dossier  app, créez un dossier  services  et dedans un fichier  face-snaps.service.ts.
Un service est une classe, et la façon la plus simple de déclarer une classe comme étant un service est d'utiliser le décorateur  `@Injectable()`  qui s'importe depuis  `@angular/core  :
import { Injectable } from '@angular/core'`;

```
@Injectable({
  providedIn: 'root
})
export class FaceSnapsService {
}
```
L'objet de configuration qui spécifie  `providedIn: 'root'`  dit à Angular d'enregistrer ce service à la racine de l'application. Ce sera très souvent le cas pour vos services, car ça permet de s'assurer de n'avoir qu'une seule instance du service, partagée par tous les partis intéressés.

Pour pouvoir utiliser un service dans un component, il faut utiliser le système d'injection de dépendances (dependency injection ou DI) que vous fournit Angular. C'est très simple : vous passez un argument du type du service au constructor du component, et Angular vous mettra à disposition la bonne instance du service. Concrètement pour votre application, dans `FaceSnapListComponent` :
`import { FaceSnapsService } from '../services/face-snaps.service';`
//...
`constructor(private faceSnapsService: FaceSnapsService) { }`
Pour rappel, ajouter un modificateur d'accès comme  public  ou  private  à un argument du  constructor  crée une propriété avec ce nom-là dans la classe. Vous aurez donc accès au service via la propriété  faceSnapsService.
On préfère généralement  private  pour les injections de service, car ça empêche le template du component d'y accéder directement. Donner au template accès aux injections serait un anti-pattern Angular – autrement dit, une approche plus que déconseillée, souvent pour des raisons qui ne sont pas flagrantes au premier abord.


Maintenant que vous avez accès au service, vous pouvez modifier l'initialisation de la propriété  faceSnaps  du component pour y attribuer le tableau du service :
```
ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
}
```
Et votre application refonctionne, sauf que maintenant elle utilise les données du service ! Ça veut dire qu'à l'avenir, vous pourriez récupérer ces données depuis un serveur, par exemple. Pour cela, il faut de la logique, des méthodes, donc dans le prochain chapitre, vous verrez comment partager des méthodes dans votre service.
## En résumé
*	Les services permettent de centraliser les données et la logique pour les différents domaines de votre application.
*	Créer un service est aussi simple qu'ajouter le décorateur  `@Injectable()`  à une classe.
*	Pour injecter un service dans un component, ajoutez un argument au constructor du component qui a le type du service, par exemple private userService: UserService
```
snapFaceSnapById(faceSnapId: number, snapType: string): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
}
```
Cette méthode utilise  `getFaceSnapById()`  pour récupérer le FaceSnap, et si le deuxième argument est  'snap', rajoute un snap ; sinon, elle enlève un snap.
Cependant, on pourrait passer n'importe quelle chaîne de caractères à cette méthode. Afin de limiter les possibilités à des options sémantiques, on peut remplacer le type  string  par un literal type :
`snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {`

## En résumé
*	Centraliser les interactions dans un service sous forme de méthodes crée une structure plus modulaire, qui facilite la maintenance et les évolutions de votre application.
*	Comme dans toute base de code, refactorisez pour éviter de répéter des blocs de code (le principe DRY : Don't Repeat Yourself).
*	Les literal types permettent de créer rapidement des types personnalisés, souvent utilisés pour limiter les choix pour un argument de méthode, par exemple : `fileType: 'image' | 'video'`


   
