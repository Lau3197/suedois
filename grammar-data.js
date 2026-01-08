// ========================================
// COMPLETE GRAMMAR DATA - Svenska Minigrammatik
// All content from the original document
// ========================================

const grammarCategories = [
    { id: 'pronoms', name: 'Pronoms', icon: '👤' },
    { id: 'verbes', name: 'Verbes', icon: '⚡' },
    { id: 'substantifs', name: 'Substantifs', icon: '📦' },
    { id: 'adjectifs', name: 'Adjectifs', icon: '🎨' },
    { id: 'syntaxe', name: 'Syntaxe', icon: '🔗' },
    { id: 'expressions', name: 'Expressions', icon: '💬' }
];

const grammarData = [
    // ==================== PRONOMS ====================
    {
        id: 1,
        category: 'pronoms',
        title: 'Pronoms sujets',
        content: `
            <table>
                <tr><th>Svenska</th><th>Français</th></tr>
                <tr><td>jag</td><td>je</td></tr>
                <tr><td>du</td><td>tu</td></tr>
                <tr><td>han</td><td>il</td></tr>
                <tr><td>hon</td><td>elle</td></tr>
                <tr><td>den</td><td>il/elle pour les mots en <strong>en</strong></td></tr>
                <tr><td>det</td><td>il/elle pour les mots en <strong>ett</strong></td></tr>
                <tr><td>man</td><td>on</td></tr>
                <tr><td>vi</td><td>nous</td></tr>
                <tr><td>ni</td><td>vous</td></tr>
                <tr><td>de [dom]</td><td>ils/elles</td></tr>
            </table>
        `
    },
    {
        id: 2,
        category: 'pronoms',
        title: 'Pronoms objets',
        content: `
            <table>
                <tr><th>Svenska</th><th>Français</th></tr>
                <tr><td>mig</td><td>moi</td></tr>
                <tr><td>dig</td><td>toi</td></tr>
                <tr><td>honom</td><td>le/l'</td></tr>
                <tr><td>henne</td><td>la/l'</td></tr>
                <tr><td>den</td><td>le/la/l' pour les mots en <strong>en</strong></td></tr>
                <tr><td>det</td><td>le/la/l' pour les mots en <strong>ett</strong></td></tr>
                <tr><td>oss</td><td>nous</td></tr>
                <tr><td>er</td><td>vous</td></tr>
                <tr><td>dem [dom]</td><td>les</td></tr>
            </table>
        `
    },
    {
        id: 3,
        category: 'pronoms',
        title: 'Pronoms possessifs',
        content: `
            <table>
                <tr><th>Svenska</th><th>Français</th></tr>
                <tr><td>min/mitt/mina</td><td>mon, ma/mes</td></tr>
                <tr><td>din/ditt/dina</td><td>ton, ta/tes</td></tr>
                <tr><td>hans</td><td>son (à lui)</td></tr>
                <tr><td>hennes</td><td>sa (à elle)</td></tr>
                <tr><td>dess</td><td>son, sa pour les mots en en et ett</td></tr>
                <tr><td>vår/vårt/våra</td><td>notre/nos</td></tr>
                <tr><td>er/ert/era</td><td>votre/vos</td></tr>
                <tr><td>deras</td><td>leur/leurs</td></tr>
            </table>
            <div class="rule-box">S'accompagne d'un nom indéfini, mais l'adjectif s'accorde.</div>
        `
    },
    {
        id: 4,
        category: 'pronoms',
        title: 'Pronoms démonstratifs',
        content: `
            <p>Le pronom démonstratif se forme avec <strong>den/det + här/där + le substantif défini</strong></p>
            <div class="example-box">
                <p class="swedish">Den här/där bullen</p>
                <p class="french">→ Ce/Cette petit pain-ci/là</p>
            </div>
            <div class="example-box">
                <p class="swedish">Det här/där äpplet</p>
                <p class="french">→ Cette pomme-ci/là</p>
            </div>
        `
    },
    {
        id: 5,
        category: 'pronoms',
        title: 'Pronoms indéfinis',
        content: `
            <h3>Någon, något, några</h3>
            <p>Signifient : quelques-uns(unes), certain(s), quelqu'un, quelque chose ou n'importe quoi.</p>
            <ul>
                <li><strong>någon</strong> : avec les mots en <em>en</em></li>
                <li><strong>något</strong> : avec les mots en <em>ett</em></li>
                <li><strong>några</strong> : pluriel des deux</li>
            </ul>
            <div class="example-box">
                <p class="swedish">Köp något hårvax!</p>
                <p class="french">→ Achète de la cire ! (peu importe laquelle donc indéfini)</p>
            </div>
            <div class="example-box">
                <p class="swedish">Någon svarade mig.</p>
                <p class="french">→ Quelqu'un m'a répondu.</p>
            </div>
            
            <h3>Ingen, inget, inga</h3>
            <p>Signifient : aucun, personne, rien, pas… de. Ils s'emploient comme någon, något et några.</p>
            <div class="example-box">
                <p class="swedish">Jag har inga kläder</p>
                <p class="french">→ Je n'ai pas de vêtements</p>
            </div>
        `
    },
    {
        id: 41,
        category: 'pronoms',
        title: 'Sin/sitt/sina vs hans/hennes/deras',
        content: `
            <h3>Sin, sitt, sina</h3>
            <p>Quand l'objet possédé est objet, et que celui qui possède est le sujet de la phrase. <strong>Jamais dans la position du sujet !</strong> La forme fait référence à l'objet qui est possédé.</p>
            <div class="example-box">
                <p class="swedish">Elsa har älskat sin man i trettio år.</p>
                <p class="french">→ Elsa a aimé son mari (à elle) pendant 30 ans.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Anders och Annika hade en fest för sina vänner.</p>
                <p class="french">→ Anders et Annika ont fait une fête pour leurs amis.</p>
            </div>
            
            <h3>Hans, hennes, deras</h3>
            <p>La forme fait référence au propriétaire.</p>
            <div class="example-box">
                <p class="swedish">Olle och hans fru ska sälja sitt gamla hus.</p>
                <p class="french">→ Olle et sa femme (à lui) vont vendre leur maison.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Anna vill inte att hennes mamma flyttar till servicehus.</p>
                <p class="french">→ Anna ne veut pas que sa maman déménage en maison de retraite.</p>
            </div>
        `
    },
    {
        id: 42,
        category: 'pronoms',
        title: 'Pronoms des formes définies',
        content: `
            <p>On utilise souvent un pronom à la place des substantifs définis.</p>
            <div class="example-box">
                <p class="swedish">Den här datorn var ganska billig. Den kostade bara 2000 kr.</p>
                <p class="french">→ Cet ordinateur était assez bon marché. Il ne coûtait que 2000 kr.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Mikael bor i ett hus i Skåne. Det är stort och ligger på landet.</p>
                <p class="french">→ Mikael habite une maison en Scanie. Elle est grande et se trouve à la campagne.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Nils har hyrt två filmer. De handlar om cowboys.</p>
                <p class="french">→ Nils a loué deux films. Ils parlent de cowboys.</p>
            </div>
        `
    },
    {
        id: 43,
        category: 'pronoms',
        title: 'Pronoms indépendants (Självständiga)',
        content: `
            <h3>Någon/något</h3>
            <div class="example-box">
                <p class="swedish">Känner du någon som är bra på datorer?</p>
                <p class="french">→ Connais-tu quelqu'un qui est bon en informatique ?</p>
            </div>
            
            <h3>Ingen/inget</h3>
            <div class="example-box">
                <p class="swedish">Det är så tråkigt. Jag har inget att göra.</p>
                <p class="french">→ C'est tellement ennuyeux. Je n'ai rien à faire.</p>
            </div>
            
            <h3>Många</h3>
            <div class="example-box">
                <p class="swedish">Många är ganska tysta.</p>
                <p class="french">→ Beaucoup sont assez silencieux.</p>
            </div>
            
            <h3>Alla = allihopa</h3>
            <div class="example-box">
                <p class="swedish">Alla på jobbet var jättetrevliga.</p>
                <p class="french">→ Tout le monde au travail était très sympa.</p>
            </div>
            
            <h3>En del</h3>
            <div class="example-box">
                <p class="swedish">En del är ganska pratsamma.</p>
                <p class="french">→ Certains sont assez bavards.</p>
            </div>
        `
    },

    // ==================== VERBES ====================
    {
        id: 6,
        category: 'verbes',
        title: 'Le présent',
        content: `
            <p>Chaque groupe dispose de sa propre conjugaison :</p>
            
            <h3>Groupe 1</h3>
            <p>Infinitif semblable au radical, terminé en -a. La forme du présent s'obtient en rajoutant un <strong>-r</strong> à ce radical.</p>
            <div class="example-box">
                <p class="swedish">arbeta → arbetar</p>
                <p class="french">→ travailler (professionnellement)</p>
            </div>
            
            <h3>Groupe 2</h3>
            <p>Verbes faibles dont l'infinitif se termine en -a, mais dont le radical ne contient pas ce -a. La conjugaison du présent se fait en rajoutant <strong>-er</strong> à ce radical.</p>
            <table>
                <tr><th>Infinitif</th><th>Présent</th></tr>
                <tr><td>ringa</td><td>ringer</td></tr>
                <tr><td>gifta</td><td>gifter</td></tr>
                <tr><td>läsa</td><td>läser</td></tr>
                <tr><td>resa</td><td>reser</td></tr>
                <tr><td>besöka</td><td>besöker</td></tr>
                <tr><td>behöva</td><td>behöver</td></tr>
                <tr><td>köpa</td><td>köper</td></tr>
                <tr><td>låta</td><td>låter</td></tr>
                <tr><td>tycka (om)</td><td>tycker (om)</td></tr>
                <tr><td>åka</td><td>åker</td></tr>
                <tr><td>heta</td><td>heter</td></tr>
                <tr><td>bygga</td><td>bygger</td></tr>
                <tr><td>söka</td><td>söker</td></tr>
                <tr><td>röka</td><td>röker</td></tr>
                <tr><td>stänga</td><td>stänger</td></tr>
            </table>
            
            <h3>Groupe 3</h3>
            <p>Verbes courts dont l'infinitif est terminé par une voyelle autre que le -a. La forme du présent s'obtient en rajoutant un <strong>-r</strong> à ce radical.</p>
            <table>
                <tr><th>Infinitif</th><th>Présent</th></tr>
                <tr><td>bo</td><td>bor</td></tr>
                <tr><td>må</td><td>mår</td></tr>
                <tr><td>tro</td><td>tror</td></tr>
                <tr><td>bli</td><td>blir</td></tr>
                <tr><td>se</td><td>ser</td></tr>
                <tr><td>dö</td><td>dör</td></tr>
                <tr><td>ta</td><td>tar</td></tr>
                <tr><td>gå</td><td>går</td></tr>
                <tr><td>(för)stå</td><td>(för)står</td></tr>
                <tr><td>göra</td><td>gör</td></tr>
            </table>
            
            <h3>Groupe 4</h3>
            <p>Verbes forts dont l'infinitif se termine en -a, mais dont le radical ne contient pas ce -a. La conjugaison du présent se fait en rajoutant <strong>-er</strong> à ce radical.</p>
            <table>
                <tr><th>Infinitif</th><th>Présent</th></tr>
                <tr><td>finna</td><td>finner</td></tr>
                <tr><td>skriva</td><td>skriver</td></tr>
                <tr><td>stiga upp</td><td>stiger upp</td></tr>
                <tr><td>äta</td><td>äter</td></tr>
                <tr><td>lägga sig</td><td>lägger sig</td></tr>
                <tr><td>dricka</td><td>dricker</td></tr>
                <tr><td>hjälpa</td><td>hjälper</td></tr>
                <tr><td>säga</td><td>säger</td></tr>
                <tr><td>sjunga</td><td>sjunger</td></tr>
                <tr><td>springa</td><td>springer</td></tr>
            </table>
            
            <div class="rule-box"><strong>Il (n')y a (pas)</strong> se traduit en suédois par : <strong>det finns (ingen/inget/inga)…</strong></div>
        `
    },
    {
        id: 7,
        category: 'verbes',
        title: 'Impératif',
        content: `
            <p>Pour construire l'impératif, il suffit de <strong>supprimer la terminaison</strong> d'un verbe conjugué au présent :</p>
            <table>
                <tr><th>Présent</th><th>Impératif</th></tr>
                <tr><td>frågar</td><td>fråga!</td></tr>
                <tr><td>behöver</td><td>behöv!</td></tr>
                <tr><td>tror</td><td>tro!</td></tr>
                <tr><td>finner</td><td>finn!</td></tr>
            </table>
            
            <h3>Exceptions</h3>
            <table>
                <tr><th>Présent</th><th>Impératif</th></tr>
                <tr><td>gör</td><td>gör!</td></tr>
                <tr><td>hör</td><td>hör!</td></tr>
                <tr><td>är</td><td>var!</td></tr>
            </table>
        `
    },
    {
        id: 8,
        category: 'verbes',
        title: 'Le prétérit (passé)',
        content: `
            <p>Le prétérit (preteritum) est utilisé pour former le passé en suédois. Pour former le prétérit, il suffit de prendre le verbe à l'impératif et de rajouter les terminaisons suivantes :</p>
            <table>
                <tr><th>Impératif</th><th>Terminaison</th><th>Prétérit</th></tr>
                <tr><td>prata!</td><td>-de</td><td>pratade</td></tr>
                <tr><td>ring!</td><td>-de</td><td>ringde</td></tr>
                <tr><td>tyck!</td><td>-te</td><td>tyckte</td></tr>
                <tr><td>bo!</td><td>-dde</td><td>bodde</td></tr>
            </table>
            
            <div class="rule-box">Les impératifs qui se terminent par <strong>-k, -p, -s, -t, ou -x</strong> prennent <strong>-te</strong> au prétérit.</div>
            <div class="rule-box">Les impératifs des verbes courts comme <em>tro</em> prennent <strong>-dde</strong> au prétérit.</div>
            
            <h3>Il y a … ans/mois</h3>
            <p>Se traduit par : <strong>för … sedan</strong></p>
            <div class="example-box">
                <p class="swedish">Jag såg utställningen för en vecka sedan.</p>
                <p class="french">→ J'ai vu l'exposition il y a une semaine.</p>
            </div>
            
            <h3>Adverbes de temps au passé</h3>
            <table>
                <tr><th>Présent</th><th>Passé</th></tr>
                <tr><td>måndag</td><td>i måndags</td></tr>
                <tr><td>vår</td><td>i våras</td></tr>
                <tr><td>sommar</td><td>i somras</td></tr>
                <tr><td>höst</td><td>i höstas</td></tr>
                <tr><td>vinter</td><td>i vintras</td></tr>
                <tr><td>idag</td><td>igår</td></tr>
            </table>
        `
    },
    {
        id: 9,
        category: 'verbes',
        title: 'Le présent parfait',
        content: `
            <p>Le présent parfait (presens perfekt) se construit toujours avec l'auxiliaire <strong>har</strong> et le <strong>supinum</strong>. Le présent parfait en suédois s'utilise comme le present perfect en anglais.</p>
            
            <p>Pour former le supinum, il suffit de prendre le verbe à l'impératif et de rajouter les terminaisons suivantes :</p>
            <table>
                <tr><th>Impératif</th><th>Terminaison</th><th>Supinum</th></tr>
                <tr><td>prata!</td><td>-t</td><td>pratat</td></tr>
                <tr><td>ring!</td><td>-t</td><td>ringt</td></tr>
                <tr><td>tyck!</td><td>-t</td><td>tyckt</td></tr>
                <tr><td>bo!</td><td>-tt</td><td>bott</td></tr>
            </table>
            
            <div class="rule-box">Les impératifs des verbes courts comme <em>tro</em> prennent <strong>-tt</strong> au supinum.</div>
            
            <div class="example-box">
                <p class="swedish">Hur länge har du bott i Sverige?</p>
                <p class="french">→ Depuis combien de temps habites-tu en Suède ?</p>
            </div>
        `
    },
    {
        id: 10,
        category: 'verbes',
        title: 'Verbes irréguliers (liste complète)',
        content: `
            <table>
                <tr><th>Français</th><th>Infinitiv</th><th>Presens</th><th>Preteritum</th><th>Supinum</th></tr>
                <tr><td>devoir</td><td>/</td><td>måste</td><td>måste</td><td>/</td></tr>
                <tr><td>aller + infinitif (futur)</td><td>skola</td><td>ska</td><td>skulle</td><td>skolat</td></tr>
                <tr><td>demander, prier</td><td>be</td><td>ber</td><td>bad</td><td>bett</td></tr>
                <tr><td>décider</td><td>besluta</td><td>beslutar</td><td>beslutade</td><td>beslutat</td></tr>
                <tr><td>offrir, proposer</td><td>bjuda</td><td>bjuder</td><td>bjöd</td><td>bjudit</td></tr>
                <tr><td>devenir</td><td>bli</td><td>blir</td><td>blev</td><td>blivit</td></tr>
                <tr><td>porter</td><td>bära</td><td>bär</td><td>bar</td><td>burit</td></tr>
                <tr><td>tirer</td><td>dra</td><td>drar</td><td>drog</td><td>dragit</td></tr>
                <tr><td>boire</td><td>dricka</td><td>dricker</td><td>drack</td><td>druckit</td></tr>
                <tr><td>pousser</td><td>driva</td><td>driver</td><td>drev</td><td>drivit</td></tr>
                <tr><td>mourir</td><td>dö</td><td>dör</td><td>dog</td><td>dött</td></tr>
                <tr><td>tomber</td><td>falla</td><td>faller</td><td>föll</td><td>fallit</td></tr>
                <tr><td>trouver</td><td>finna</td><td>finner</td><td>fann</td><td>funnit</td></tr>
                <tr><td>voler (dans l'air)</td><td>flyga</td><td>flyger</td><td>flög</td><td>flugit</td></tr>
                <tr><td>continuer</td><td>fortsätta</td><td>fortsätter</td><td>fortsatte</td><td>fortsatt</td></tr>
                <tr><td>geler</td><td>frysa</td><td>fryser</td><td>frös</td><td>frusit</td></tr>
                <tr><td>obtenir</td><td>få</td><td>får</td><td>fick</td><td>fått</td></tr>
                <tr><td>disparaître</td><td>försvinna</td><td>försvinner</td><td>försvann</td><td>försvunnit</td></tr>
                <tr><td>donner</td><td>ge</td><td>ger</td><td>gav</td><td>gett</td></tr>
                <tr><td>aller, marcher</td><td>gå</td><td>går</td><td>gick</td><td>gått</td></tr>
                <tr><td>faire</td><td>göra</td><td>gör</td><td>gjorde</td><td>gjort</td></tr>
                <tr><td>avoir</td><td>ha</td><td>har</td><td>hade</td><td>haft</td></tr>
                <tr><td>s'appeler</td><td>heta</td><td>heter</td><td>hette</td><td>hetat</td></tr>
                <tr><td>tenir</td><td>hålla</td><td>håller</td><td>höll</td><td>hållit</td></tr>
                <tr><td>venir</td><td>komma</td><td>kommer</td><td>kom</td><td>kommit</td></tr>
                <tr><td>savoir, pouvoir</td><td>kunna</td><td>kan</td><td>kunde</td><td>kunnat</td></tr>
                <tr><td>être couché</td><td>ligga</td><td>ligger</td><td>låg</td><td>legat</td></tr>
                <tr><td>poser</td><td>lägga</td><td>lägger</td><td>lade</td><td>lagt</td></tr>
                <tr><td>laisser</td><td>låta</td><td>låter</td><td>lät</td><td>låtit</td></tr>
                <tr><td>voir</td><td>se</td><td>ser</td><td>såg</td><td>sett</td></tr>
                <tr><td>nager</td><td>simma</td><td>simmar</td><td>simmade</td><td>simmat</td></tr>
                <tr><td>s'asseoir</td><td>sitta</td><td>sitter</td><td>satt</td><td>suttit</td></tr>
                <tr><td>chanter</td><td>sjunga</td><td>sjunger</td><td>sjöng</td><td>sjungit</td></tr>
                <tr><td>briller</td><td>skina</td><td>skiner</td><td>sken</td><td>skinit</td></tr>
                <tr><td>écrire</td><td>skriva</td><td>skriver</td><td>skrev</td><td>skrivit</td></tr>
                <tr><td>frapper</td><td>slå</td><td>slår</td><td>slog</td><td>slagit</td></tr>
                <tr><td>se battre</td><td>slåss</td><td>slåss</td><td>slogs</td><td>slagits</td></tr>
                <tr><td>dormir</td><td>sova</td><td>sover</td><td>sov</td><td>sovit</td></tr>
                <tr><td>tourner</td><td>spinna</td><td>spinner</td><td>spann</td><td>spunnit</td></tr>
                <tr><td>courir</td><td>springa</td><td>springer</td><td>sprang</td><td>sprungit</td></tr>
                <tr><td>monter</td><td>stiga</td><td>stiger</td><td>steg</td><td>stigit</td></tr>
                <tr><td>voler (dérober)</td><td>stjäla</td><td>stjäl</td><td>stal</td><td>stulit</td></tr>
                <tr><td>être debout</td><td>stå</td><td>står</td><td>stod</td><td>stått</td></tr>
                <tr><td>prendre</td><td>ta</td><td>tar</td><td>tog</td><td>tagit</td></tr>
                <tr><td>être</td><td>vara</td><td>är</td><td>var</td><td>varit</td></tr>
                <tr><td>savoir</td><td>veta</td><td>vet</td><td>visste</td><td>vetat</td></tr>
                <tr><td>vouloir</td><td>vilja</td><td>vill</td><td>ville</td><td>velat</td></tr>
                <tr><td>gagner</td><td>vinna</td><td>vinner</td><td>vann</td><td>vunnit</td></tr>
                <tr><td>s'habituer</td><td>vänja</td><td>vänjer</td><td>vande</td><td>vant</td></tr>
                <tr><td>grandir</td><td>växa</td><td>växer</td><td>växte</td><td>växt</td></tr>
                <tr><td>manger</td><td>äta</td><td>äter</td><td>åt</td><td>ätit</td></tr>
            </table>
        `
    },
    {
        id: 11,
        category: 'verbes',
        title: 'Les verbes modaux (hjälpverb)',
        content: `
            <p>Les verbes modaux se construisent avec l'infinitif <strong>sans att</strong> !</p>
            <div class="example-box">
                <p class="swedish">Jag behöver köpa en ny jacka.</p>
                <p class="french">→ J'ai besoin d'acheter une nouvelle veste.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Jag kan tala svenska.</p>
                <p class="french">→ Je sais parler suédois.</p>
            </div>
            
            <table>
                <tr><th>Infinitif</th><th>Présent</th><th>Prétérit</th><th>Traduction</th></tr>
                <tr><td>kunna</td><td>kan</td><td>kunde</td><td>pouvoir, savoir, avoir la capacité de</td></tr>
                <tr><td>vilja</td><td>vill</td><td>ville</td><td>vouloir</td></tr>
                <tr><td>skola</td><td>ska</td><td>skulle</td><td>auxiliaire du futur (will)</td></tr>
                <tr><td>/*</td><td>måste</td><td>måste</td><td>devoir</td></tr>
                <tr><td>böra</td><td>/</td><td>borde</td><td>devrait</td></tr>
                <tr><td>få (inte)</td><td>får (inte)</td><td>fick (inte)</td><td>être interdit de, ne pas devoir</td></tr>
                <tr><td>orka</td><td>orkar</td><td>orkade</td><td>avoir le courage/la force de</td></tr>
                <tr><td>behöva</td><td>behöver</td><td>behövde</td><td>avoir besoin de</td></tr>
                <tr><td>bruka</td><td>brukar</td><td>brukade</td><td>avoir l'habitude de</td></tr>
                <tr><td>hinna</td><td>hinner</td><td>hann</td><td>avoir le temps de</td></tr>
            </table>
            <p><em>*måste n'a pas d'infinitif</em></p>
        `
    },
    {
        id: 12,
        category: 'verbes',
        title: 'Les verbes gå et åka',
        content: `
            <p>En suédois, il y a deux verbes pour exprimer le mouvement : <strong>gå</strong> et <strong>åka</strong>.</p>
            
            <h3>Le verbe gå</h3>
            <p>Signifie : aller à pied, marcher, se promener. S'utilise aussi pour exprimer qu'un transport en commun part.</p>
            <div class="example-box">
                <p class="swedish">Kan man gå till Storberga?</p>
                <p class="french">→ Peut-on aller à pied à Storberga ?</p>
            </div>
            <div class="example-box">
                <p class="swedish">När går nästa buss till universitetet?</p>
                <p class="french">→ Quand part le prochain bus pour l'université ?</p>
            </div>
            
            <h3>Le verbe åka</h3>
            <p>Signifie aller lorsqu'on ne peut pas marcher et s'utilise lorsqu'on utilise un moyen de transport.</p>
            <div class="example-box">
                <p class="swedish">Vi ska åka till Mexiko på semester.</p>
                <p class="french">→ Nous allons aller au Mexique en vacances.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Det är bättre att åka bil eller cykla.</p>
                <p class="french">→ C'est mieux d'aller en voiture ou à vélo.</p>
            </div>
            <p>Man åker bil, buss, tunnelbana, tåg, helikopter, flyg.</p>
            
            <div class="warning-box">Après les verbes modaux <strong>ska, vill</strong> et <strong>måste</strong>, on n'utilise NI gå NI åka !</div>
            <div class="example-box">
                <p class="swedish">Jag ska till Stockholm.</p>
                <p class="french">→ Je vais à Stockholm.</p>
            </div>
        `
    },
    {
        id: 34,
        category: 'verbes',
        title: 'Le futur',
        content: `
            <p>Le futur en suédois se forme de plusieurs façons :</p>
            
            <h3>1. Ska + infinitif</h3>
            <p>Décision, volonté ou planification du sujet.</p>
            <div class="example-box">
                <p class="swedish">Jag ska fortsätta studera svenska i Vilnius.</p>
                <p class="french">→ Je vais continuer à étudier le suédois à Vilnius.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Jag ska bo i Kyoto!</p>
                <p class="french">→ Je vais habiter à Kyoto !</p>
            </div>
            <div class="example-box">
                <p class="swedish">Ska du komma med på bio?</p>
                <p class="french">→ Tu vas venir au cinéma ?</p>
            </div>
            
            <h3>2. Présent + complément de temps</h3>
            <p>Par exemple: imorgon, nästa år</p>
            <div class="example-box">
                <p class="swedish">På tisdag åker vi till stugan.</p>
                <p class="french">→ Mardi, nous allons au chalet.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Flyget går på morgonen den 1 september.</p>
                <p class="french">→ L'avion part le matin du 1er septembre.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Jag är färdig med min examen om två år.</p>
                <p class="french">→ J'aurai terminé mes études dans deux ans.</p>
            </div>
            
            <h3>3. Kommer att + infinitif</h3>
            <p>Processus naturel, le sujet ne décide et ne planifie rien. Conséquence logique.</p>
            <div class="example-box">
                <p class="swedish">Det kommer kanske att bli svårt att hitta fast jobb.</p>
                <p class="french">→ Il sera peut-être difficile de trouver un emploi fixe.</p>
            </div>
            
            <div class="rule-box"><strong>Blir</strong> peut être utilisé comme futur de être.</div>
            
            <h3>"Dans X temps"</h3>
            <p>Se traduit par <strong>om X</strong></p>
            <div class="example-box">
                <p class="swedish">När ska du ha semester igen? Jag ska ha semester om 5 månader.</p>
                <p class="french">→ Quand auras-tu des vacances à nouveau ? J'aurai des vacances dans 5 mois.</p>
            </div>
        `
    },
    {
        id: 32,
        category: 'verbes',
        title: 'Infinitif avec/sans att',
        content: `
            <p>Il n'y a <strong>pas de att</strong> devant l'infinitif lorsqu'on utilise un <strong>hjälpverb</strong> (verbe modal). Sinon, il faut mettre un att.</p>
            
            <h3>Sans att (avec hjälpverb)</h3>
            <div class="example-box">
                <p class="swedish">Hon vill helst gå på museer.</p>
                <p class="french">→ Elle préfère aller aux musées.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Mina släktingar ska åka till London på semester.</p>
                <p class="french">→ Mes proches vont aller à Londres en vacances.</p>
            </div>
            
            <h3>Avec att</h3>
            <div class="example-box">
                <p class="swedish">Det finns mycket att göra i London.</p>
                <p class="french">→ Il y a beaucoup à faire à Londres.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Min kusin älskar att shoppa.</p>
                <p class="french">→ Ma cousine adore faire du shopping.</p>
            </div>
        `
    },
    {
        id: 33,
        category: 'verbes',
        title: 'Sitter/står/ligger/håller på och',
        content: `
            <p>On utilise ces verbes pour décrire la <strong>position</strong> dans laquelle on fait quelque chose. On utilise <strong>håller på</strong> quand la position n'a pas d'importance.</p>
            
            <div class="example-box">
                <p class="swedish">Tre vänner sitter och pratar på en restaurang.</p>
                <p class="french">→ Trois amis sont assis et discutent au restaurant.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Vi håller på och fixar ett bord.</p>
                <p class="french">→ Nous sommes en train de réparer une table.</p>
            </div>
            
            <table>
                <tr><th>Impératif</th><th>Infinitiv</th><th>Presens</th><th>Preteritum</th><th>Supinum</th></tr>
                <tr><td>håll!</td><td>hålla</td><td>håller</td><td>höll</td><td>hållit</td></tr>
                <tr><td>ligg!</td><td>ligga</td><td>ligger</td><td>låg</td><td>legat</td></tr>
                <tr><td>sitt!</td><td>sitta</td><td>sitter</td><td>satt</td><td>suttit</td></tr>
                <tr><td>stå!</td><td>stå</td><td>står</td><td>stod</td><td>stått</td></tr>
            </table>
        `
    },

    // ==================== SUBSTANTIFS ====================
    {
        id: 14,
        category: 'substantifs',
        title: 'Le substantif (vue d\'ensemble)',
        content: `
            <h3>Le substantif indéfini singulier</h3>
            <p>En suédois, il y a le genre <strong>commun</strong> et le genre <strong>neutre</strong> :</p>
            <ul>
                <li><strong>en lampa</strong> (commun) : une lampe</li>
                <li><strong>ett täcke</strong> (neutre) : une couverture</li>
            </ul>
            <p>On place simplement le <em>en</em> ou le <em>ett</em> devant le mot.</p>
            
            <h3>Le substantif défini au singulier</h3>
            <p>En suédois, le substantif défini se colle <strong>à la fin du mot</strong>.</p>
            <ul>
                <li>en säng → <strong>sängen</strong></li>
                <li>ett lakan → <strong>lakanet</strong></li>
            </ul>
            <div class="rule-box">Si le mot se termine par une voyelle, il prend seulement un <strong>-n</strong> ou un <strong>-t</strong></div>
            <ul>
                <li>en lampa → lampan</li>
                <li>ett täcke → täcket</li>
            </ul>
            
            <h3>Le substantif indéfini au pluriel</h3>
            <p><strong>Les mots en "en" :</strong></p>
            <ul>
                <li>Si le mot se termine par a : en penna → <strong>pennor</strong></li>
                <li>Si le mot est d'origine germanique : en stol → <strong>stolar</strong></li>
                <li>Si le mot est d'origine scandinave : en dator → <strong>datorer</strong></li>
                <li>Si le mot se termine par une voyelle : en tå → <strong>tår</strong></li>
            </ul>
            <p><strong>Les mots en "ett" :</strong></p>
            <ul>
                <li>Si le mot termine par une voyelle : ett äpple → <strong>äpplen</strong> (+n)</li>
                <li>Si le mot se termine par une consonne : <strong>invariable</strong> (ett papper → papper)</li>
            </ul>
            <div class="rule-box">Les mots en <strong>-are</strong> sont invariables au pluriel : en lärare → lärare</div>
            
            <h3>Le substantif défini au pluriel</h3>
            <ul>
                <li>Pour les mots en <em>en</em> : pluriel indéfini + <strong>-na</strong> (pennor → pennorna)</li>
                <li>Pour les mots en <em>ett</em> invariables : + <strong>-en</strong> (lakan → lakanen)</li>
                <li>Pour les mots en <em>ett</em> en -n : + <strong>-a</strong> (täcken → täckena)</li>
                <li>Les mots en <em>-are</em> perdent leur -e et on ajoute -na : läkare → läkarna</li>
            </ul>
            
            <h3>Tableau récapitulatif</h3>
            <table>
                <tr><th>un/une</th><th>le/la</th><th>des</th><th>les</th></tr>
                <tr><td>en lampa</td><td>lampan</td><td>lampor</td><td>lamporna</td></tr>
                <tr><td>en säng</td><td>sängen</td><td>sängar</td><td>sängarna</td></tr>
                <tr><td>en madrass</td><td>madrassen</td><td>madrasser</td><td>madrasserna</td></tr>
                <tr><td>ett täcke</td><td>täcket</td><td>täcken</td><td>täckena</td></tr>
                <tr><td>ett lakan</td><td>lakanet</td><td>lakan</td><td>lakanen</td></tr>
                <tr><td>en läkare</td><td>läkaren</td><td>läkare</td><td>läkarna</td></tr>
            </table>
        `
    },
    {
        id: 15,
        category: 'substantifs',
        title: 'Substantifs irréguliers',
        content: `
            <table>
                <tr><th>Indéfini sing.</th><th>Défini sing.</th><th>Indéfini plur.</th><th>Défini plur.</th><th>Français</th></tr>
                <tr><td>en cykel</td><td>cykeln</td><td>cyklar</td><td>cyklarna</td><td>un vélo</td></tr>
                <tr><td>en dotter</td><td>dottern</td><td>döttrar</td><td>döttrarna</td><td>une fille (daughter)</td></tr>
                <tr><td>en morgon</td><td>morgonen</td><td>morgnar</td><td>morgnarna</td><td>un matin</td></tr>
                <tr><td>en semester</td><td>semestern</td><td>semestrar</td><td>semestrarna</td><td>un congé</td></tr>
                <tr><td>en sommar</td><td>sommaren</td><td>somrar</td><td>somrarna</td><td>un été</td></tr>
                <tr><td>en bok</td><td>boken</td><td>böcker</td><td>böckerna</td><td>un livre</td></tr>
                <tr><td>en bror</td><td>brodern</td><td>bröder</td><td>bröderna</td><td>un frère</td></tr>
                <tr><td>en fot</td><td>foten</td><td>fötter</td><td>fötterna</td><td>un pied</td></tr>
                <tr><td>en hand</td><td>handen</td><td>händer</td><td>händerna</td><td>une main</td></tr>
                <tr><td>ett land</td><td>landet</td><td>länder</td><td>länderna</td><td>un pays</td></tr>
                <tr><td>ett museum</td><td>museet</td><td>museer</td><td>museerna</td><td>un musée</td></tr>
                <tr><td>en natt</td><td>natten</td><td>nätter</td><td>nätterna</td><td>une nuit</td></tr>
                <tr><td>en son</td><td>sonen</td><td>söner</td><td>sönerna</td><td>un fils</td></tr>
                <tr><td>en stad</td><td>staden</td><td>städer</td><td>städerna</td><td>une ville</td></tr>
                <tr><td>en tand</td><td>tanden</td><td>tänder</td><td>tänderna</td><td>une dent</td></tr>
                <tr><td>ett öga</td><td>ögat</td><td>ögon</td><td>ögonen</td><td>un œil</td></tr>
                <tr><td>ett fönster</td><td>fönstret</td><td>fönster</td><td>fönstren</td><td>une fenêtre</td></tr>
                <tr><td>ett hem</td><td>hemmet</td><td>hem</td><td>hemmen</td><td>un foyer</td></tr>
                <tr><td>en man</td><td>mannen</td><td>män</td><td>männen</td><td>un homme</td></tr>
            </table>
        `
    },
    {
        id: 16,
        category: 'substantifs',
        title: 'Chiffres',
        content: `
            <h3>Nombres cardinaux</h3>
            <table>
                <tr><th>Chiffre</th><th>Svenska</th><th>Chiffre</th><th>Svenska</th></tr>
                <tr><td>1</td><td>en/ett</td><td>11</td><td>elva</td></tr>
                <tr><td>2</td><td>två</td><td>12</td><td>tolv</td></tr>
                <tr><td>3</td><td>tre</td><td>13</td><td>tretton</td></tr>
                <tr><td>4</td><td>fyra</td><td>14</td><td>fjorton</td></tr>
                <tr><td>5</td><td>fem</td><td>15</td><td>femton</td></tr>
                <tr><td>6</td><td>sex</td><td>16</td><td>sexton</td></tr>
                <tr><td>7</td><td>sju</td><td>17</td><td>sjutton</td></tr>
                <tr><td>8</td><td>åtta</td><td>18</td><td>arton</td></tr>
                <tr><td>9</td><td>nio</td><td>19</td><td>nitton</td></tr>
                <tr><td>10</td><td>tio</td><td>20</td><td>tjugo</td></tr>
            </table>
            <table>
                <tr><th>Dizaines</th><th>Svenska</th></tr>
                <tr><td>30</td><td>trettio</td></tr>
                <tr><td>40</td><td>fyrtio</td></tr>
                <tr><td>50</td><td>femtio</td></tr>
                <tr><td>60</td><td>sextio</td></tr>
                <tr><td>70</td><td>sjuttio</td></tr>
                <tr><td>80</td><td>åttio</td></tr>
                <tr><td>90</td><td>nittio</td></tr>
                <tr><td>100</td><td>hundra</td></tr>
                <tr><td>1 000</td><td>tusen</td></tr>
                <tr><td>1 million</td><td>en miljon</td></tr>
                <tr><td>1 milliard</td><td>en miljard</td></tr>
            </table>
            
            <h3>Substantiver les chiffres</h3>
            <p>Pour former un substantif à partir d'un chiffre, il suffit de rajouter la terminaison <strong>-a</strong> à la fin du chiffre.</p>
            <div class="example-box">
                <p class="swedish">De har en tvåa mitt i stan</p>
                <p class="french">→ Ils ont un (appartement de) deux-pièces en centre-ville. (tvåa signifie le (bus) 2)</p>
            </div>
            <div class="example-box">
                <p class="swedish">Fyrtiotvåorna passar bäst.</p>
                <p class="french">→ Les quarante-deux (pointures) vont le mieux. (Substantif au défini pluriel)</p>
            </div>
            <div class="warning-box">On ne peut pas former de substantif avec les nombres suivants : 13-19, 20, 40, 50, 60, 70, 80, 90 et 100.</div>
            
            <h3>Nombres ordinaux</h3>
            <table>
                <tr><th>Ordinal</th><th>Svenska</th><th>Ordinal</th><th>Svenska</th></tr>
                <tr><td>1er</td><td>första</td><td>7e</td><td>sjunde</td></tr>
                <tr><td>2e</td><td>andra</td><td>8e</td><td>åttonde</td></tr>
                <tr><td>3e</td><td>tredje</td><td>9e</td><td>nionde</td></tr>
                <tr><td>4e</td><td>fjärde</td><td>10e</td><td>tionde</td></tr>
                <tr><td>5e</td><td>femte</td><td>11e</td><td>elfte</td></tr>
                <tr><td>6e</td><td>sjätte</td><td>12e</td><td>tolfte</td></tr>
            </table>
            <p>13e → trettonde, 20e → tjugonde, 100e → hundrade, 1000e → tusende</p>
        `
    },
    {
        id: 35,
        category: 'substantifs',
        title: 'Forme définie et indéfinie (Bestämd och obestämd)',
        content: `
            <h3>Quand utiliser la forme définie</h3>
            <ul>
                <li>Quand ce n'est pas la première fois que l'on parle de quelque chose</li>
                <li>Après les pronoms démonstratifs: den/det/de här/där</li>
                <li>Quand on ne parle de rien de spécifique (objet connu ou concept)</li>
                <li>Dans certaines expressions de temps (habituellement)</li>
                <li>Quand quelque chose fait naturellement partie de quelque chose</li>
            </ul>
            <div class="example-box">
                <p class="swedish">Selin fick ett jobb i Göteborg. Jobbet är intressant.</p>
                <p class="french">→ Selin a trouvé un travail à Göteborg. Le travail est intéressant.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Den här veckan har varit stressig.</p>
                <p class="french">→ Cette semaine a été stressante.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Anna sitter vid datorn.</p>
                <p class="french">→ Anna est devant l'ordinateur.</p>
            </div>
            
            <h3>Quand utiliser la forme indéfinie</h3>
            <ul>
                <li>Quand l'information est nouvelle</li>
                <li>Après les déterminants possessifs</li>
                <li>Après un génitif</li>
                <li>Après des "mots de quantité" et les chiffres: ingen/inget/inga, någon/något/några, många, flera, olika, tre, etc.</li>
                <li>Après nästa et samma</li>
            </ul>
            <div class="example-box">
                <p class="swedish">Anna lånade en hund och gick ut med den i parken.</p>
                <p class="french">→ Anna a emprunté un chien et l'a promené dans le parc.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Vi kanske kan sitta i ditt kök.</p>
                <p class="french">→ On pourrait peut-être s'asseoir dans ta cuisine.</p>
            </div>
            <div class="warning-box">Après <strong>förra</strong>, le mot est défini !</div>
        `
    },

    // ==================== ADJECTIFS ====================
    {
        id: 17,
        category: 'adjectifs',
        title: 'Adjectifs à l\'indéfini',
        content: `
            <p>Règles d'accord de l'adjectif à l'indéfini :</p>
            <table>
                <tr><th>Article</th><th>Adjectif</th><th>Substantif</th><th>Règle</th></tr>
                <tr><td>en</td><td>stor</td><td>bil</td><td>adjectif invariable</td></tr>
                <tr><td>ett</td><td>stor<strong>t</strong></td><td>hus</td><td>on rajoute un -t à l'adjectif</td></tr>
                <tr><td>pluriel</td><td>stor<strong>a</strong></td><td>bilar/hus</td><td>on rajoute un -a à l'adjectif</td></tr>
            </table>
            
            <h3>Exceptions</h3>
            <table>
                <tr><th>Adjectif</th><th>Neutre</th><th>Pluriel</th><th>Traduction</th></tr>
                <tr><td>svart</td><td>svart</td><td>svarta</td><td>noir</td></tr>
                <tr><td>vit</td><td>vitt</td><td>vita</td><td>blanc</td></tr>
                <tr><td>rund</td><td>runt</td><td>runda</td><td>rond</td></tr>
                <tr><td>röd</td><td>rött</td><td>röda</td><td>rouge</td></tr>
                <tr><td>blå</td><td>blått</td><td>blåa</td><td>bleu</td></tr>
                <tr><td>grå</td><td>grått</td><td>gråa</td><td>gris</td></tr>
                <tr><td>fri</td><td>fritt</td><td>fria</td><td>libre, gratuit</td></tr>
                <tr><td>liten</td><td>litet</td><td>små</td><td>petit</td></tr>
                <tr><td>gammal</td><td>gammalt</td><td>gamla</td><td>vieux</td></tr>
                <tr><td>bra</td><td colspan="2">invariable</td><td>bien</td></tr>
                <tr><td>kul</td><td colspan="2">invariable</td><td>cool</td></tr>
                <tr><td>orange, beige, rosa, lila</td><td colspan="2">invariables</td><td>orange, beige, rose, mauve</td></tr>
            </table>
            
            <h3>Règles spéciales</h3>
            <ul>
                <li>Les adjectifs en <strong>-d</strong> prennent <strong>-tt</strong> au neutre (röd → rött). Exception : rund → runt</li>
                <li>Les adjectifs en <strong>-ad</strong> : -at au neutre et -de au pluriel (intresserad → intresserat → intresserade)</li>
                <li>Les adjectifs en <strong>-t</strong> sont invariables au neutre (vit → vitt). Exception : svart → svart</li>
                <li>Les adjectifs en <strong>-er, -al, -en</strong> deviennent <strong>-ra, -la, -na</strong> au pluriel (vacker → vackra)</li>
                <li>Les adjectifs en <strong>-nde</strong> sont invariables (fascinerande)</li>
            </ul>
        `
    },
    {
        id: 18,
        category: 'adjectifs',
        title: 'Adjectifs au défini',
        content: `
            <p>Lorsque l'adjectif est au défini avec <strong>den/det</strong>, il prend simplement un <strong>-a</strong></p>
            <div class="example-box">
                <p class="swedish">det gamla huset</p>
                <p class="french">→ la vieille maison</p>
            </div>
            <div class="example-box">
                <p class="swedish">den stora bilen</p>
                <p class="french">→ la grande voiture</p>
            </div>
            
            <p>De la même manière, les adjectifs avec un <strong>pronom possessif</strong> ou les <strong>génitifs</strong> prennent un <strong>-a</strong></p>
            <div class="example-box">
                <p class="swedish">min stora bil</p>
                <p class="french">→ ma grande voiture</p>
            </div>
            <div class="example-box">
                <p class="swedish">Jennys gröna bil</p>
                <p class="french">→ la voiture verte de Jenny</p>
            </div>
            
            <div class="rule-box">Lorsqu'il y a un substantif suivi du verbe être et d'un adjectif, l'adjectif s'accorde avec le substantif.</div>
            <div class="example-box">
                <p class="swedish">böckerna är roliga</p>
                <p class="french">→ les livres sont amusants</p>
            </div>
            <div class="example-box">
                <p class="swedish">huset är gammalt</p>
                <p class="french">→ la maison est vieille</p>
            </div>
            
            <h3>Tableau récapitulatif Substantif + Adjectif</h3>
            <p><strong>Singulier:</strong></p>
            <table>
                <tr><th>Indéfini</th><th>Prédicat</th><th>Défini</th></tr>
                <tr><td>En stor älg</td><td>Älgen är stor</td><td>Den stora älgen</td></tr>
                <tr><td>Ett gult hus</td><td>Huset är gult</td><td>Det gula huset</td></tr>
            </table>
            <p><strong>Pluriel:</strong></p>
            <table>
                <tr><th>Indéfini</th><th>Prédicat</th><th>Défini</th></tr>
                <tr><td>Stora älgar</td><td>Älgarna är stora</td><td>De stora älgarna</td></tr>
                <tr><td>Gula hus</td><td>Husen är gula</td><td>De gula husen</td></tr>
            </table>
            
            <h3>Exception : liten</h3>
            <table>
                <tr><th>Forme</th><th>Singulier en</th><th>Singulier ett</th><th>Pluriel</th></tr>
                <tr><td>Indéfini</td><td>en liten älg</td><td>ett litet hus</td><td>små älgar/hus</td></tr>
                <tr><td>Prédicat</td><td>Älgen är liten</td><td>Huset är litet</td><td>Älgarna/Husen är små</td></tr>
                <tr><td>Défini</td><td>Den lilla älgen</td><td>Det lilla huset</td><td>De små älgarna/husen</td></tr>
            </table>
        `
    },
    {
        id: 19,
        category: 'adjectifs',
        title: 'Comparatifs et superlatifs',
        content: `
            <h3>Formation régulière</h3>
            <table>
                <tr><th>Adjectif</th><th>Comparatif</th><th>Superlatif</th></tr>
                <tr><td>dyr</td><td>dyr<strong>are</strong></td><td>dyr<strong>ast</strong></td></tr>
            </table>
            <p>Le "que" se traduit par <strong>än</strong></p>
            <div class="example-box">
                <p class="swedish">Det är dyrare att bo i stan än på landet.</p>
                <p class="french">→ C'est plus cher d'habiter en ville qu'à la campagne.</p>
            </div>
            
            <h3>Irréguliers</h3>
            <table>
                <tr><th>Adjectif</th><th>Comparatif</th><th>Superlatif</th><th>Traduction</th></tr>
                <tr><td>dum</td><td>dummare</td><td>dummast</td><td>stupide, bête</td></tr>
                <tr><td>hög</td><td>högre</td><td>högst</td><td>haut</td></tr>
                <tr><td>lång</td><td>längre</td><td>längst</td><td>long</td></tr>
                <tr><td>nära</td><td>närmare</td><td>närmast</td><td>proche</td></tr>
                <tr><td>stor</td><td>större</td><td>störst</td><td>grand</td></tr>
                <tr><td>tung</td><td>tyngre</td><td>tyngst</td><td>lourd</td></tr>
                <tr><td>ung</td><td>yngre</td><td>yngst</td><td>jeune</td></tr>
                <tr><td>vacker</td><td>vackrare</td><td>vackrast</td><td>beau</td></tr>
                <tr><td>bra</td><td>bättre</td><td>bäst</td><td>bon</td></tr>
                <tr><td>dålig</td><td>sämre/värre*</td><td>sämst/värst*</td><td>mauvais</td></tr>
                <tr><td>få</td><td>färre</td><td>färst</td><td>peu (few)</td></tr>
                <tr><td>gammal</td><td>äldre</td><td>äldst</td><td>vieux</td></tr>
                <tr><td>gärna</td><td>hellre</td><td>helst</td><td>volontiers</td></tr>
                <tr><td>lite</td><td>mindre</td><td>minst</td><td>peu (little)</td></tr>
                <tr><td>liten</td><td>mindre</td><td>minst</td><td>petit</td></tr>
                <tr><td>mycket</td><td>mer</td><td>mest</td><td>beaucoup (much)</td></tr>
                <tr><td>många</td><td>fler</td><td>flest</td><td>beaucoup (many)</td></tr>
            </table>
            <p><em>*sämre/sämst quand la situation est positive et devient négative</em></p>
            <p><em>*värre/värst quand la situation est déjà négative et s'empire</em></p>
            
            <div class="rule-box">Les adjectifs qui finissent par <strong>-ad</strong> et <strong>-isk</strong> forment leur comparatif et superlatif avec <strong>mer</strong> et <strong>mest</strong></div>
            <table>
                <tr><th>Adjectif</th><th>Comparatif</th><th>Superlatif</th></tr>
                <tr><td>intresserad</td><td>mer intresserad</td><td>mest intresserad</td></tr>
                <tr><td>praktisk</td><td>mer praktisk</td><td>mest praktisk</td></tr>
            </table>
        `
    },
    {
        id: 36,
        category: 'adjectifs',
        title: 'Få/många vs lite/mycket',
        content: `
            <h3>Få / många = Countable (dénombrable)</h3>
            <div class="example-box">
                <p class="swedish">Då har jag köpt för få biffar. Jag har bara 3 stycken.</p>
                <p class="french">→ Alors j'ai acheté trop peu de steaks. J'en ai seulement 3.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Hur många potatisar ska jag koka?</p>
                <p class="french">→ Combien de pommes de terre dois-je faire cuire ?</p>
            </div>
            
            <h3>Lite / mycket = Uncountable (indénombrable)</h3>
            <div class="example-box">
                <p class="swedish">Vill du ha kaffe? Ja, men bara lite. Jag vill kunna sova ikväll.</p>
                <p class="french">→ Tu veux du café ? Oui, mais juste un peu. Je veux pouvoir dormir ce soir.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Hur mycket mjöl behöver man till pannkakorna?</p>
                <p class="french">→ Combien de farine faut-il pour les crêpes ?</p>
            </div>
            
            <h3>Comparatifs</h3>
            <table>
                <tr><th>Positif</th><th>Comparatif</th><th>Superlatif</th></tr>
                <tr><td>mycket</td><td>mer</td><td>mest</td></tr>
                <tr><td>lite</td><td>mindre</td><td>minst</td></tr>
                <tr><td>många</td><td>fler</td><td>flest</td></tr>
                <tr><td>få</td><td>färre</td><td>färst (rare)</td></tr>
            </table>
            <div class="example-box">
                <p class="swedish">I Finland dricker man mest kaffe per person i hela världen.</p>
                <p class="french">→ En Finlande, on boit le plus de café par personne au monde.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Stockholm har färre invånare än Paris.</p>
                <p class="french">→ Stockholm a moins d'habitants que Paris.</p>
            </div>
        `
    },

    // ==================== SYNTAXE ====================
    {
        id: 13,
        category: 'syntaxe',
        title: 'Mots interrogatifs',
        content: `
            <table>
                <tr><th>Suédois</th><th>Français</th></tr>
                <tr><td>Vad heter du?</td><td>Comment t'appelles-tu ?</td></tr>
                <tr><td>Vad dricker du för kaffe?</td><td>Que bois-tu comme café ?</td></tr>
                <tr><td>Var bor Anika?</td><td>Où habite Anika ?</td></tr>
                <tr><td>Varför kom du inte till skolan igår?</td><td>Pourquoi n'es-tu pas venu à l'école hier ?</td></tr>
                <tr><td>Varifrån kommer du?</td><td>D'où viens-tu ?</td></tr>
                <tr><td>Hur länge har du bott i Sverige?</td><td>Depuis combien de temps habites-tu en Suède ?</td></tr>
                <tr><td>Hur mycket kostar kaffet?</td><td>Combien coûte le café ? (how much)</td></tr>
                <tr><td>Hur många invånare har Sverige?</td><td>Combien d'habitants compte la Suède ? (how many)</td></tr>
                <tr><td>Hur ofta spelar du tennis?</td><td>How often do you play tennis?</td></tr>
                <tr><td>Vart ska du resa på semestern?</td><td>Où (direction) vas-tu voyager pendant les vacances ?</td></tr>
                <tr><td>Vem är det?</td><td>Qui est-ce ?</td></tr>
                <tr><td>Vems bok är det här?</td><td>À qui est le livre ici ?</td></tr>
                <tr><td>Hur säger man "..." på svenska?</td><td>Comment dit-on « … » en suédois ?</td></tr>
                <tr><td>När/vilken tid/hur dags börjar filmen?</td><td>Quand commence le film ?</td></tr>
                <tr><td>Vilken buss går till Stockholm?</td><td>Quel bus va à Stockholm ?</td></tr>
                <tr><td>Vilket år är du född?</td><td>En quelle année es-tu né ?</td></tr>
                <tr><td>Vilka böcker ska vi läsa på kursen?</td><td>Quels livres lirons-nous en cours ?</td></tr>
            </table>
        `
    },
    {
        id: 20,
        category: 'syntaxe',
        title: 'Också / inte heller',
        content: `
            <h3>Phrase positive</h3>
            <div class="example-box">
                <p class="swedish">– Jag älskar Sverige.</p>
                <p class="swedish">– Jag också / Det gör jag också.</p>
                <p class="french">→ Moi aussi.</p>
            </div>
            
            <h3>Phrase négative</h3>
            <div class="example-box">
                <p class="swedish">– Jag gillar inte techno.</p>
                <p class="swedish">– Inte jag heller / Men det gör jag.</p>
                <p class="french">→ Moi non plus / Mais moi si.</p>
            </div>
        `
    },
    {
        id: 21,
        category: 'syntaxe',
        title: 'Omission du sujet',
        content: `
            <p>On peut ne pas utiliser de sujet lorsque :</p>
            <ul>
                <li>Les phrases sont reliées par <strong>och</strong> ou <strong>men</strong></li>
                <li>C'est le même sujet dans les deux phrases</li>
                <li>Le sujet se trouve directement après <em>och</em> ou <em>men</em> (donc S+V et non V+S)</li>
            </ul>
            <div class="example-box">
                <p class="swedish">Karina äter frukost och läser tidningen.</p>
                <p class="french">→ Karina prend son petit-déjeuner et lit le journal.</p>
            </div>
        `
    },
    {
        id: 22,
        category: 'syntaxe',
        title: 'Tror att vs tycker om',
        content: `
            <h3>Tror att</h3>
            <p>On n'est pas sûr mais on a une idée (donner son avis sur un livre qu'on n'a pas lu).</p>
            <div class="example-box">
                <p class="swedish">Jag har inte ätit surströmming men jag tror att det är äckligt.</p>
                <p class="french">→ Je n'ai pas mangé de surströmming mais je crois que c'est dégoûtant.</p>
            </div>
            
            <h3>Tycker att</h3>
            <p>On a une opinion/estimation de la chose (donner son avis sur le restaurant où on a mangé).</p>
            <div class="example-box">
                <p class="swedish">Jag har ätit det. Jag tycker att det är ganska gott.</p>
                <p class="french">→ J'en ai mangé. Je trouve que c'est assez bon.</p>
            </div>
        `
    },
    {
        id: 23,
        category: 'syntaxe',
        title: 'Conjonctions de coordination',
        content: `
            <table>
                <tr><th>Conjonction</th><th>Traduction</th><th>Exemple</th></tr>
                <tr><td><strong>och</strong></td><td>et</td><td>Nils städar och lyssnar på radio.</td></tr>
                <tr><td><strong>eller</strong></td><td>ou</td><td>Jag vill äta pizza eller tacos ikväll.</td></tr>
                <tr><td><strong>men</strong></td><td>mais</td><td>Tyvärr har jag inte körkort, men jag kanske kan sitta bak på din motorcykel.</td></tr>
                <tr><td><strong>för</strong></td><td>car</td><td>Stina måste plugga i helgen för hon har prov på måndag.</td></tr>
                <tr><td><strong>så</strong></td><td>donc</td><td>Kursen var lite tråkig så Bengt slutade efter två veckor.</td></tr>
            </table>
            <div class="warning-box">Pas d'inversion après une conjonction de coordination !</div>
        `
    },
    {
        id: 24,
        category: 'syntaxe',
        title: 'Då – först – sedan (expressions de temps)',
        content: `
            <h3>Då : alors, à ce moment-là</h3>
            <div class="example-box">
                <p class="swedish">Jag är färdig med min examen om två år. Då ska jag söka jobb som översättare.</p>
                <p class="french">→ J'aurai terminé mes études dans deux ans. À ce moment-là, je chercherai un travail de traducteur.</p>
            </div>
            
            <h3>Först : d'abord</h3>
            <div class="example-box">
                <p class="swedish">Först ska jag studera på KTH ett år.</p>
                <p class="french">→ D'abord, je vais étudier à KTH pendant un an.</p>
            </div>
            
            <h3>Sedan : ensuite</h3>
            <div class="example-box">
                <p class="swedish">Sedan ska jag göra min praktik här.</p>
                <p class="french">→ Ensuite, je ferai mon stage ici.</p>
            </div>
        `
    },
    {
        id: 25,
        category: 'syntaxe',
        title: 'Propositions relatives (P2)',
        content: `
            <p>Les P2 relatives font référence au mot/substantif placé devant. On ne peut pas introduire une P2 relative avec le verbe <em>var</em>. Attention à la place des adverbes !</p>
            
            <h3>som : qui, que, dont</h3>
            <div class="example-box">
                <p class="swedish">Man ser ett rött hus som ligger precis vid vattnet.</p>
                <p class="french">→ On voit une maison rouge qui se trouve juste au bord de l'eau.</p>
            </div>
            
            <h3>där : où (lieu)</h3>
            <p>Fait référence à un lieu. Il y a toujours un nouveau sujet après <em>där</em>.</p>
            <div class="example-box">
                <p class="swedish">Berit vet ett ställe där det brukar finnas många kantareller.</p>
                <p class="french">→ Berit connaît un endroit où il y a souvent beaucoup de chanterelles.</p>
            </div>
            
            <h3>när : quand</h3>
            <p>Fait référence à un moment.</p>
            <div class="example-box">
                <p class="swedish">Senare på eftermiddagen när de är hemma igen, bakar Kurt Allan en blåbärspaj.</p>
                <p class="french">→ Plus tard dans l'après-midi, quand ils sont de retour à la maison, Kurt Allan prépare une tarte aux myrtilles.</p>
            </div>
            
            <div class="rule-box">Quand on parle d'un lieu mais qu'il n'y a pas un nouveau sujet dans la P2 = <strong>som</strong></div>
            <div class="example-box">
                <p class="swedish">Vi har ett landställe som är jättefint.</p>
                <p class="french">→ Nous avons une maison de campagne qui est très belle.</p>
            </div>
        `
    },
    {
        id: 26,
        category: 'syntaxe',
        title: 'Subjonctions (Subjunktioner)',
        content: `
            <table>
                <tr><th>Subjonction</th><th>Traduction</th><th>Exemple</th></tr>
                <tr><td><strong>innan</strong></td><td>avant que</td><td>Jag läser en stund innan jag somnar.</td></tr>
                <tr><td><strong>medan</strong></td><td>pendant que</td><td>Axel städar medan Simon lagar mat.</td></tr>
                <tr><td><strong>trots att</strong></td><td>bien que</td><td>Isak joggade igår trots att det regnade.</td></tr>
                <tr><td><strong>även om</strong></td><td>même si (général)</td><td>Kristina badar varje dag även om det är kallt i vattnet.</td></tr>
                <tr><td><strong>när</strong></td><td>quand</td><td>Han såg ledsen ut när jag såg honom igår.</td></tr>
                <tr><td><strong>eftersom/därför att</strong></td><td>parce que</td><td>Jag går sällan på bio därför att jag inte gillar film.</td></tr>
                <tr><td><strong>om</strong></td><td>si</td><td>Jag kan äta upp pannkakorna om du inte vill ha dem.</td></tr>
                <tr><td><strong>att</strong></td><td>que</td><td>Han sa att hennes mamma inte är frisk.</td></tr>
                <tr><td><strong>för att</strong></td><td>pour, afin de</td><td>Man går inte bara i skolan för att lära sig olika ämnen.</td></tr>
                <tr><td><strong>utan att</strong></td><td>sans</td><td>Man kan lära sig mycket utan att göra en massa läxor.</td></tr>
                <tr><td><strong>genom att</strong></td><td>au moyen de, en</td><td>Lärarna kan motivera sina elever genom att ge dem många prov.</td></tr>
            </table>
            <div class="warning-box">Ne pas commencer une phrase par <strong>därför att</strong>. Utilisez <strong>eftersom</strong> à la place.</div>
            <div class="rule-box">"Il marche en chantant" ≠ genom att. → Han går och sjunger.</div>
        `
    },
    {
        id: 29,
        category: 'syntaxe',
        title: 'Discours indirect',
        content: `
            <h3>Question oui/non</h3>
            <p>X undrar/frågar/vill veta + <strong>om</strong> + ...</p>
            <div class="example-box">
                <p class="swedish">Peter frågar om det är kallt i vattnet.</p>
                <p class="french">→ Peter demande s'il fait froid dans l'eau.</p>
            </div>
            
            <h3>Affirmation/déclaration</h3>
            <p>X säger/tycker/tror + <strong>att</strong> + ...</p>
            <div class="example-box">
                <p class="swedish">Pia säger att filmen är jättebra.</p>
                <p class="french">→ Pia dit que le film est super bien.</p>
            </div>
            
            <h3>Ordre de la phrase (questions)</h3>
            <p>X undrar/frågar/vill veta + <strong>mot interrogatif</strong> + bisats</p>
            <div class="example-box">
                <p class="swedish">Carlos undrar vad de ska äta till middag.</p>
                <p class="french">→ Carlos se demande ce qu'ils vont manger pour le dîner.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Lena frågar var banken ligger.</p>
                <p class="french">→ Lena demande où se trouve la banque.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Hannah vill veta när festen börjar.</p>
                <p class="french">→ Hannah veut savoir quand la fête commence.</p>
            </div>
        `
    },
    {
        id: 30,
        category: 'syntaxe',
        title: 'Presens perfekt vs preteritum',
        content: `
            <table>
                <tr><th>Present Perfekt</th><th>Preteritum</th></tr>
                <tr><td>Tiden är inte intressant</td><td>Berättande tempus (temps narratif)</td></tr>
                <tr><td>Nu-adverb</td><td>Då-adverb (tidpunkt eller tidsperiod)</td></tr>
                <tr><td>Tiden är inte slut</td><td>-</td></tr>
            </table>
            
            <h3>Nu-adverb (= presens perfekt)</h3>
            <ul>
                <li>i år</li>
                <li>den här månaden/veckan</li>
                <li>hela dagen idag</li>
            </ul>
            
            <h3>Då-adverb (= preteritum)</h3>
            <ul>
                <li>förra året</li>
                <li>i förrgår</li>
                <li>i morse</li>
            </ul>
        `
    },

    // ==================== EXPRESSIONS ====================
    {
        id: 27,
        category: 'expressions',
        title: 'Hemma hos / hem till',
        content: `
            <h3>Är/sitter/ligger/etc + hemma hos + personnes</h3>
            <div class="example-box">
                <p class="swedish">Jag var hemma hos honom och spelade dataspel igår.</p>
                <p class="french">→ J'étais chez lui à jouer aux jeux vidéo hier.</p>
            </div>
            
            <h3>Går/åker/flyger/etc + hem till + personnes</h3>
            <div class="example-box">
                <p class="swedish">På semestern ska jag åka hem till Turkiet.</p>
                <p class="french">→ Pendant les vacances, je vais rentrer en Turquie.</p>
            </div>
            
            <div class="rule-box">On utilise le mot <strong>hus</strong> que lorsqu'on parle du bâtiment</div>
            <div class="example-box">
                <p class="swedish">Mario har köpt ett nytt hus. Det är jättefint. Vi var hemma hos dem igår på middag.</p>
                <p class="french">→ Mario a acheté une nouvelle maison. Elle est super belle. Nous étions chez eux hier pour le dîner.</p>
            </div>
        `
    },
    {
        id: 28,
        category: 'expressions',
        title: 'Adverbes de position/destination/origine',
        content: `
            <table>
                <tr><th>Position</th><th>Destination</th><th>Origine</th><th>Français</th></tr>
                <tr><td>där</td><td>dit</td><td>därifrån</td><td>là</td></tr>
                <tr><td>här</td><td>hit</td><td>härifrån</td><td>ici</td></tr>
                <tr><td>var</td><td>vart</td><td>varifrån</td><td>où</td></tr>
                <tr><td>hemma</td><td>hem</td><td>hemifrån</td><td>maison</td></tr>
                <tr><td>borta</td><td>bort</td><td>bortifrån</td><td>au loin</td></tr>
                <tr><td>inne</td><td>in</td><td>inifrån</td><td>dedans</td></tr>
                <tr><td>ute</td><td>ut</td><td>utifrån</td><td>dehors</td></tr>
                <tr><td>uppe</td><td>upp</td><td>uppifrån</td><td>en haut</td></tr>
                <tr><td>nere</td><td>ner</td><td>nerifrån</td><td>en bas</td></tr>
                <tr><td>framme</td><td>fram</td><td>framifrån</td><td>devant</td></tr>
            </table>
        `
    },
    {
        id: 31,
        category: 'expressions',
        title: 'Adverbes de temps (Tidsadverb)',
        content: `
            <table>
                <tr><th></th><th>Preteritum</th><th>Habitude</th><th>Futur</th></tr>
                <tr><td><strong>Jours</strong></td><td>i måndags, i tisdags</td><td>på måndagar(na), på tisdagar(na)</td><td>på måndag, på tisdag</td></tr>
                <tr><td><strong>Saisons</strong></td><td>i våras, i somras, i höstas, i vintras</td><td>på våren/vårarna, på sommaren/somrarna</td><td>i vår, i sommar, i höst, i vinter</td></tr>
                <tr><td><strong>Fêtes</strong></td><td>i påskas, på midsommarafton, i julas, på nyårsafton</td><td>på påsken, på midsommarafton, på julen, på nyårsafton</td><td>i påsk, på midsommarafton, i jul, på nyårsafton</td></tr>
            </table>
        `
    },
    {
        id: 37,
        category: 'expressions',
        title: 'Hem et hemma',
        content: `
            <p><strong>Hem</strong> et <strong>hemma</strong> signifient « à la maison » un peu comme « home » en anglais.</p>
            <ul>
                <li><strong>Hem</strong> s'utilise lorsqu'il y a une <em>destination</em></li>
                <li><strong>Hemma</strong> s'utilise lorsqu'il y a une <em>position</em></li>
            </ul>
            <div class="example-box">
                <p class="swedish">Jag åker hem till Ungern om två veckor.</p>
                <p class="french">→ Je rentre en Hongrie dans deux semaines.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Jag är hemma. Vill du komma hem till mig?</p>
                <p class="french">→ Je suis à la maison. Tu veux venir chez moi ?</p>
            </div>
        `
    },
    {
        id: 38,
        category: 'expressions',
        title: 'Prépositions',
        content: `
            <table>
                <tr><th>Préposition</th><th>Usage</th><th>Exemple</th></tr>
                <tr><td><strong>i</strong></td><td>ville/pays/région/province</td><td>Malmö ligger i Skåne. Jag bor i Stockholm.</td></tr>
                <tr><td><strong>på</strong></td><td>rue/place/île</td><td>Jag arbetar på Storgatan. Vi ses på Stortorget. Visby ligger på Gotland.</td></tr>
                <tr><td><strong>på</strong></td><td>endroit avec une activité spécifique</td><td>Vi ses på restaurangen!</td></tr>
                <tr><td><strong>till</strong></td><td>exprime un mouvement</td><td>Jag ska till Sverige!</td></tr>
            </table>
        `
    },
    {
        id: 39,
        category: 'expressions',
        title: 'Comparaisons (Jämförelser)',
        content: `
            <h3>Lika…som</h3>
            <div class="example-box">
                <p class="swedish">Perssons tomt är lika stor som vår.</p>
                <p class="french">→ Le terrain des Persson est aussi grand que le nôtre.</p>
            </div>
            
            <h3>Komparativ + än</h3>
            <div class="example-box">
                <p class="swedish">Mount Everest är högre än Kebnekaise.</p>
                <p class="french">→ Le Mont Everest est plus haut que le Kebnekaise.</p>
            </div>
            
            <h3>Att + infinitif</h3>
            <div class="example-box">
                <p class="swedish">Det är dyrare att bo i villa än (att bo) i lägenhet.</p>
                <p class="french">→ C'est plus cher de vivre dans une maison qu'en appartement.</p>
            </div>
        `
    },
    {
        id: 40,
        category: 'expressions',
        title: 'Exclamations (Utrop)',
        content: `
            <h3>Vilken/vilket/vilka + adjectif + substantif + sujet + verbe</h3>
            <div class="example-box">
                <p class="swedish">Vilken god soppa vi åt igår!</p>
                <p class="french">→ Quelle bonne soupe nous avons mangée hier !</p>
            </div>
            <div class="example-box">
                <p class="swedish">Vilket fint piano ni har!</p>
                <p class="french">→ Quel beau piano vous avez !</p>
            </div>
            <div class="example-box">
                <p class="swedish">Vilka svåra frågor du ställer!</p>
                <p class="french">→ Quelles questions difficiles tu poses !</p>
            </div>
            
            <h3>Vad + adjectif + sujet + verbe</h3>
            <div class="example-box">
                <p class="swedish">Vad gullig du är!</p>
                <p class="french">→ Que tu es mignon(ne) !</p>
            </div>
        `
    },
    {
        id: 41,
        category: 'verbes',
        title: 'Passiv form (-s)',
        content: `
            <p>Il existe deux manières de former le passif en suédois, mais la plus courante est la forme en <strong>-s</strong>.</p>
            
            <h3>Formation</h3>
            <p>On ajoute un <strong>-s</strong> à la forme active du verbe :</p>
            <ul>
                <li>Infinitif : stänga → stängas (être fermé)</li>
                <li>Présent : stänger → stängs (est fermé)</li>
                <li>Passé : stängde → stängdes (fut/était fermé)</li>
                <li>Supin : stängt → stängts (a été fermé)</li>
            </ul>
            
            <div class="example-box">
                <p class="swedish">Huset <strong>målas</strong> av målaren.</p>
                <p class="french">→ La maison est peinte par le peintre.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Dörren <strong>öppnas</strong> klockan åtta.</p>
                <p class="french">→ La porte est ouverte (s'ouvre) à huit heures.</p>
            </div>

            <p>L'autre forme utilise <strong>bli</strong> + participe passé :</p>
            <div class="example-box">
                <p class="swedish">Huset <strong>blir målat</strong>.</p>
                <p class="french">→ La maison devient peinte.</p>
            </div>
        `
    },
    {
        id: 42,
        category: 'verbes',
        title: 'Presens particip (Participe présent)',
        content: `
            <p>Le participe présent s'utilise souvent comme adjectif (un homme <em>riant</em>).</p>
            
            <h3>Formation</h3>
            <p><strong>-ande</strong> : Pour les verbes dont l'infinitif se termine par <strong>-a</strong> (Groupes 1, 2, 4).</p>
            <ul>
                <li>tala → talande (parlant)</li>
                <li>arbeta → arbetande (travaillant)</li>
                <li>skriva → skrivande (écrivant)</li>
            </ul>

            <p><strong>-ende</strong> : Pour les verbes dont l'infinitif se termine par une autre voyelle (Groupe 3).</p>
            <ul>
                <li>bo → boende (habitant/résidant)</li>
                <li>gå → gående (marchant/piéton)</li>
                <li>le → leende (souriant)</li>
            </ul>

            <div class="example-box">
                <p class="swedish">En <strong>sovande</strong> björn.</p>
                <p class="french">→ Un ours dormant.</p>
            </div>
        `
    },
    {
        id: 43,
        category: 'verbes',
        title: 'Konditional (Conditionnel)',
        content: `
            <p>Pour exprimer une hypothèse ("je ferais") ou le futur du passé ("je ferais" dans "il a dit qu'il ferait").</p>
            
            <h3>Formation</h3>
            <p><strong>Skulle + Infinitif</strong></p>
            
            <div class="example-box">
                <p class="swedish">Om jag var rik, <strong>skulle</strong> jag <strong>köpa</strong> en ö.</p>
                <p class="french">→ Si j'étais riche, j'<strong>achèterais</strong> une île.</p>
            </div>
            
            <p>Note : Dans la proposition 'Si' (Om...), on utilise le prétérit (var, hade, gjorde).</p>
        `
    },
    {
        id: 44,
        category: 'syntaxe',
        title: 'Konjunktioner (Länkar dubbla)',
        content: `
            <p>Certaines conjonctions vont par paire.</p>
            
            <ul>
                <li><strong>Både ... och</strong> (Et ... et / À la fois ... et)
                    <br><em>Jag gillar både kaffe och te.</em> (J'aime et le café et le thé.)
                </li>
                <li><strong>Antingen ... eller</strong> (Soit ... soit)
                    <br><em>Du får antingen äta upp eller gå från bordet.</em> (Tu dois soit finir ton assiette, soit quitter la table.)
                </li>
                <li><strong>Varken ... eller</strong> (Ni ... ni)
                    <br><em>Han röker varken eller dricker.</em> (Il ne fume ni ne boit.)
                    <br><em>Obs: "inte" est inclus dans le sens de varken.</em>
                </li>
                <li><strong>Ju ... desto</strong> (Plus ... plus)
                    <br><em>Ju mer jag tränar, desto starkare blir jag.</em> (Plus je m'entraîne, plus je deviens fort.)
                </li>
            </ul>
        `
    },
    {
        id: 45,
        category: 'syntaxe',
        title: 'Presentering (Det + verb)',
        content: `
            <p>En suédois, quand on introduit un sujet indéfini nouveau dans la conversation, on utilise souvent une construction avec <strong>Det</strong> (sujet formel) + verbe + le sujet réel.</p>
            
            <div class="example-box">
                <p class="swedish"><strong>Det sitter</strong> en fågel på taket.</p>
                <p class="french">→ Il y a un oiseau sur le toit. (Lit: Il est assis un oiseau...)</p>
            </div>
            
            <p>On n'aime pas commencer une phrase par un sujet indéfini ("En fågel sitter..."). On préfère la présentation avec "Det".</p>
            
            <p>Verbes de position courants :</p>
            <ul>
                <li><strong>Det sitter...</strong> (assis)</li>
                <li><strong>Det står...</strong> (debout/posé)</li>
                <li><strong>Det ligger...</strong> (couché/situé)</li>
                <li><strong>Det hänger...</strong> (suspendu)</li>
                <li><strong>Det finns...</strong> (il y a / il existe)</li>
            </ul>
        `
    },
    {
        id: 46,
        category: 'adjectifs',
        title: 'Adjektiv vs Adverb',
        content: `
            <p><strong>Adjektiv</strong> : Décrit un substantif ou un pronom (être).</p>
            <p><strong>Adverb</strong> : Décrit un verbe, un adjectif ou une phrase entière.</p>
            
            <p>L'adverbe de manière (comment on fait quelque chose) est souvent identique à la forme <strong>neutre (-t)</strong> de l'adjectif.</p>
            
            <div class="example-box">
                <p class="swedish">Hon är <strong>vacker</strong>. (Adj - décrit 'Hon')</p>
                <p class="french">→ Elle est belle.</p>
                <hr>
                <p class="swedish">Hon sjunger <strong>vackert</strong>. (Adv - décrit 'sjunger')</p>
                <p class="french">→ Elle chante bien/joliment.</p>
            </div>
             <div class="example-box">
                <p class="swedish">Bilen är <strong>snabb</strong>.</p>
                <p class="french">→ La voiture est rapide.</p>
                <hr>
                <p class="swedish">Han kör <strong>snabbt</strong>.</p>
                <p class="french">→ Il conduit vite.</p>
            </div>
        `
    },
    {
        id: 47,
        category: 'expressions',
        title: 'Prépositions de temps (Tidsprepositioner)',
        content: `
            <h3>Hur ofta? (Fréquence)</h3>
            <ul>
                <li><strong>om</strong> : dagen, året, dygnet (jour, an, 24h)
                    <br><em>Oscar springer en gång om dagen.</em>
                </li>
                <li><strong>i</strong> : veckan, timmen, månaden, minuten
                    <br><em>Maria tränar tre gånger i veckan.</em>
                </li>
            </ul>

            <h3>Hur länge? (Durée)</h3>
            <ul>
                <li><strong>i</strong> (ou rien)
                    <br><em>Varje gång tränar hon (i) två timmar ungefär.</em>
                </li>
            </ul>

            <h3>Hur snabbt? (Vitesse)</h3>
            <ul>
                <li><strong>på</strong>
                    <br><em>Hon springer snabbt, fem kilometer på 20 minuter.</em>
                </li>
            </ul>

            <h3>När? (Quand)</h3>
            <table>
                <tr><th>Temps</th><th>Préposition</th><th>Exemple</th></tr>
                <tr><td>Passé (Preteritum)</td><td><strong>för ... sedan</strong></td><td>Mats och Anna började dansa tango för ett år sedan. (il y a un an)</td></tr>
                <tr><td>Futur (Presens/Futurum)</td><td><strong>om</strong></td><td>Om en månad ska de resa till Argentina. (dans un mois)</td></tr>
            </table>

            <div class="rule-box">
                <p><strong>Om 3 år</strong> = dans 3 ans // <strong>I 3 år</strong> = pendant 3 ans</p>
                <p><strong>För 1 år sedan</strong> = il y a un an</p>
                <p><strong>På en timme</strong> = en une heure (temps pour accomplir)</p>
                <p><strong>Om dygnet</strong> = par 24h</p>
                <p><strong>Om året</strong> = par an</p>
            </div>
        `
    },
    {
        id: 48,
        category: 'syntaxe',
        title: 'Sambandsord (Mots de liaison)',
        content: `
            <p>Les <em>sambandsord</em> relient les phrases et montrent leur connexion (contraste, explication, etc.). <em>Dock</em> est plus souvent utilisé à l'écrit. On ne commence JAMAIS une phrase avec <em>nämligen</em> et rarement avec <em>dock</em>.</p>
            
            <h3>Nämligen (en effet, c'est-à-dire)</h3>
            <div class="example-box">
                <p class="swedish">Huggormar biter sällan människor. Ormarna är nämligen rädda för människor.</p>
                <p class="french">→ Les vipères mordent rarement les gens. Les serpents sont en effet effrayés par les gens.</p>
            </div>

            <h3>Dock (cependant, toutefois)</h3>
            <div class="example-box">
                <p class="swedish">Ett huggormsbett kan dock vara mycket farligt.</p>
                <p class="french">→ Une morsure de vipère peut cependant être très dangereuse.</p>
            </div>

            <h3>Därför (c'est pourquoi)</h3>
            <div class="example-box">
                <p class="swedish">Många är rädda och vågar därför inte gå ut.</p>
                <p class="french">→ Beaucoup ont peur et n'osent donc pas sortir.</p>
            </div>

            <h3>Däremot (par contre, en revanche)</h3>
            <div class="example-box">
                <p class="swedish">Man kan däremot vaccinera sig mot TBE.</p>
                <p class="french">→ On peut par contre se faire vacciner contre la TBE.</p>
            </div>
        `
    },
    {
        id: 49,
        category: 'syntaxe',
        title: 'Vilket – Något som',
        content: `
            <p><strong>Vilket</strong> et <strong>något som</strong> renvoient à une phrase entière. Ils peuvent être sujet dans une P2. On les utilise principalement en langage soutenu.</p>
            
            <div class="example-box">
                <p class="swedish">Kristin kan kinesiska, <strong>vilket/något som</strong> är bra för hennes karriär.</p>
                <p class="french">→ Kristin sait parler chinois, ce qui est bon pour sa carrière.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Eleverna kommer alltid för sent, <strong>vilket/något som</strong> irriterar läraren.</p>
                <p class="french">→ Les élèves arrivent toujours en retard, ce qui irrite le professeur.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Oljepriset har gått upp, <strong>vilket/något som</strong> gör att det blir dyrare att resa.</p>
                <p class="french">→ Le prix du pétrole a monté, ce qui rend les voyages plus chers.</p>
            </div>
        `
    },
    {
        id: 50,
        category: 'expressions',
        title: 'Hos, Till eller På',
        content: `
            <h3>Position (Vara...)</h3>
            <ul>
                <li><strong>Hos</strong> : personne (frisören, doktorn, tandläkaren, Peter)</li>
            </ul>

            <h3>Destination (Gå/åka/ringa...)</h3>
            <ul>
                <li><strong>Till</strong> : personne/lieu (frisören, doktorn, tandläkaren, stan, Peter, polisen)</li>
            </ul>

            <h3>Aktivitet (Gå...)</h3>
            <p>Accent sur <strong>l'activité</strong> et non l'endroit.</p>
            <ul>
                <li><strong>På</strong> : bio, teater, opera, nattklubb, museum, krogen</li>
            </ul>

            <h3>Transport (Gå/åka/flyga...)</h3>
            <p>Accent sur le <strong>transport</strong> et non sur l'activité.</p>
            <ul>
                <li><strong>Till</strong> : bion, teatern, operan, nattklubben, museet</li>
            </ul>

            <div class="example-box">
                <p class="swedish">Igår när jag var hos Frida... (Position)</p>
                <p class="french">→ Hier quand j'étais chez Frida...</p>
            </div>
            <div class="example-box">
                <p class="swedish">...frågade hon om jag ville gå på konsert... (Activité)</p>
                <p class="french">→ ...elle a demandé si je voulais aller au concert...</p>
            </div>
            <div class="example-box">
                <p class="swedish">Sedan ringde vi till Elsa... (Destination)</p>
                <p class="french">→ Ensuite nous avons appelé Elsa...</p>
            </div>
            <div class="example-box">
                <p class="swedish">Hon var hos frisören... (Position)</p>
                <p class="french">→ Elle était chez le coiffeur...</p>
            </div>
        `
    },
    {
        id: 51,
        category: 'adjectifs',
        title: 'Ser ... ut (Avoir l\'air)',
        content: `
            <h3>Ser + adjectif + ut</h3>
            <p>Il faut accorder l'adjectif !</p>
            
            <div class="example-box">
                <p class="swedish">Hon <strong>ser trevlig ut</strong>.</p>
                <p class="french">→ Elle a l'air sympa.</p>
            </div>
            <div class="example-box">
                <p class="swedish">De <strong>ser trevliga ut</strong>.</p>
                <p class="french">→ Ils ont l'air sympas.</p>
            </div>

            <p><strong>Règle générale vs Spécifique :</strong></p>
            <div class="example-box">
                <p class="swedish">Glass är <strong>gott</strong>. (En général)</p>
                <p class="french">→ La glace, c'est bon.</p>
            </div>
            <div class="example-box">
                <p class="swedish">Den här glassen är <strong>god</strong>. (Cette glace en particulier)</p>
                <p class="french">→ Cette glace est bonne.</p>
            </div>
        `
    },
    {
        id: 52,
        category: 'syntaxe',
        title: 'Subjunktioner - Détails',
        content: `
            <h3>Temps</h3>
            <ul>
                <li><strong>När</strong> : Quand (passé spécifique)
                    <br><em>Han var lite nervös när han gick till skolan.</em>
                </li>
                <li><strong>Medan</strong> : Pendant que
                    <br><em>Medan han pluggade, lyssnade han på musik.</em>
                </li>
                <li><strong>Innan</strong> : Avant que
                    <br><em>Han var färdig 15 minuter innan provtiden var slut.</em>
                </li>
                <li><strong>Tills</strong> : Jusqu'à ce que
                    <br><em>Så höll han på tills han kunde allt.</em>
                </li>
                <li><strong>(inte)...förrän</strong> : Pas...avant que
                    <br><em>Han ville inte träna förrän han var helt frisk.</em>
                </li>
            </ul>

            <h3>Comment</h3>
            <ul>
                <li><strong>Utan att</strong> (+ infinitif) : Sans
                    <br><em>Han gör marinaden utan att titta i recept.</em>
                </li>
                <li><strong>Genom att</strong> (+ infinitif) : En / Par le moyen de
                    <br><em>Han lärde sig alla namn genom att associera till olika saker.</em>
                </li>
            </ul>

            <h3>Contraste</h3>
            <ul>
                <li><strong>Även om</strong> : Même si (Hypothèse)
                    <br><em>Vi grillar även om det är dåligt väder.</em>
                </li>
                <li><strong>Trots att / fastän</strong> : Bien que / Malgré que (Réalité)
                    <br><em>Trots att han var trött gick provet bra.</em>
                </li>
            </ul>

            <h3>Condition</h3>
            <ul>
                <li><strong>Ifall</strong> : Au cas où / Si
                    <br><em>Juliet, nu struntar jag i ifall du tror mig.</em>
                </li>
                <li><strong>Om</strong> : Si
                    <br><em>Jag frågade om han ville följa med.</em>
                </li>
            </ul>

            <h3>Cause</h3>
            <ul>
                <li><strong>Eftersom / Därför att</strong> : Parce que / Puisque
                    <br><em>Eftersom jag är trött ska jag ta en tupplur.</em>
                </li>
            </ul>

            <h3>Résultat</h3>
            <ul>
                <li><strong>Så att</strong> : De sorte que
                    <br><em>Lägg biffarna i marinad så att de smakar gott.</em>
                </li>
            </ul>

            <h3>Intention / But</h3>
            <ul>
                <li><strong>För att</strong> (+ infinitif) : Pour
                    <br><em>Jag ringde för att fråga...</em>
                </li>
            </ul>

            <div class="rule-box">
                <strong>Règle de l'infinitif :</strong>
                <p>On utilise <strong>för att / utan att / genom att + infinitif</strong> si c'est le <strong>même sujet</strong> dans la phrase principale et la subordonnée.</p>
                <p><em>Lena åker till stan för att handla.</em></p>
                <p><em>Olof svarade utan att tänka.</em></p>
                <p><em>Michael lärde sig svenska genom att se svenska filmer.</em></p>
            </div>
        `
    }
];

