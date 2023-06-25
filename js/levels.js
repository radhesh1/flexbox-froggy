var levels = [
  {
    name: 'justify-content 1',
    instructions: {
      'en': '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      'fr': '<p>Bienvenue à Flexbox Froggy, un jeu où vous aidez Froggy la grenouille et ses amis en écrivant du code CSS! Guidez cette grenouille au nénuphar à la droite de l\'étang en utilisant la propriété <code>justify-content</code>, qui aligne les éléments horizontalement et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les éléments s\'alignent au côté gauche du conteneur.</li><li><code>flex-end</code> : Les éléments s\'alignent au côté droit du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s\'alignent au centre du conteneur.</li><li><code>space-between</code>&nbsp;: Les éléments s\'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les éléments s\'affichent avec un espacement égal à l\'entour d\'eux.</li></ul><p>Par exemple,  <code>justify-content: flex-end;</code> bougera la grenouille vers la droite.</p>',
    },
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 2',
    instructions: {
      'en': '<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>',
      'fr': '<p>Utilisez encore <code>justify-content</code> pour aider ces grenouilles à se rendre à leurs nénuphars. Souvenez-vous que cette propriété CSS aligne les éléments horizontalement et accepte les valeurs suivantes&nbsp;: </p><ul><li><code>flex-start</code>&nbsp;: Les éléments s\'alignent au côté gauche du conteneur.</li><li><code>flex-end</code> : Les éléments s\'alignent au côté droit du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s\'alignent au centre du conteneur.</li><li><code>space-between</code>&nbsp;: Les éléments s\'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les éléments s\'affichent avec un espacement égal à l\'entour d\'eux.</li></ul>',
    },
    board: 'gy',
    style: {'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 3',
    instructions: {
      'en': '<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on <code>justify-content</code>.</p>',
      'fr': '<p>Aidez les trois grenouilles à trouver leurs nénuphars en utilisant seulement <code>justify-content</code>. Cette fois-ci, les nénuphars ont beaucoup d\'espace tout autour d\'eux.</p><p>Si vous oubliez les valeurs possibles pour une propriété, vous pouvez survoler le nom de cette propriété pour les voir. Essayez de survoler <code>justify-content</code>.</p>',
    },
    board: 'gyr',
    style: {'justify-content': 'space-around'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 4',
    instructions: {
      'en': '<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.</p>',
      'fr': '<p>Maintenant, les nénuphars sur les côtés ont dérivé jusqu\'à la rive, augmentant l\'espace entre eux. Utilisez <code>justify-content</code>. Cette fois-ci, l\'espace entre chaque nénuphar est équivalent.</p>',
    },
    board: 'gyr',
    style: {'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 1',
    instructions: {
      'en': '<p>Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>',
      'fr': '<p>Maintenant, utilisez <code>align-items</code> pour aider les grenouilles à se rendre au bas de l\'étang. Cette propriété CSS aligne les éléments verticalement et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les éléments s\'alignent au haut du conteneur.</li><li><code>flex-end</code>&nbsp;: Les éléments s\'alignent au bas du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s\'alignent au centre vertical du conteneur.</li><li><code>baseline</code>&nbsp;: Les éléments s\'alignent à la ligne de base du conteneur.</li><li><code>stretch</code>&nbsp;: Les éléments sont étirés pour s\'adapter au conteneur.</li></ul>',
    },
    board: 'gyr',
    style: {'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 2',
    instructions: {
      'en': '<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'fr': '<p>Dirigez la grenouille au centre de l\'étang en utilisant une combinaison de <code>justify-content</code> et <code>align-items</code>.</p>',
    },
    board: 'g',
    style: {'justify-content': 'center', 'align-items': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 3',
    instructions: {
      'en': '<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Use a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
      'fr': '<p>Les grenouilles doivent encore traverser l\'étang. Cette fois-ci, les nénuphars ont beaucoup d\'espace autour d\'eux. Utilisez une combinaison de <code>justify-content</code> et <code>align-items</code>.</p>',
    },
    board: 'gyr',
    style: {'justify-content': 'space-around', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 1',
    instructions: {
      'en': '<p>The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      'fr': '<p>Les grenouilles doivent se rendre dans le même ordre que leurs nénuphars en utilisant <code>flex-direction</code>. Cette propriété CSS définit la direction dans laquelle les éléments sont placés dans le conteneur, et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>row</code>&nbsp;: Les éléments sont disposés dans la même direction que le texte.</li><li><code>row-reverse</code>&nbsp;: Les éléments sont disposés dans la direction opposée au texte.</li><li><code>column</code>&nbsp;: Les éléments sont disposés de haut en bas.</li><li><code>column-reverse</code>&nbsp;: Les éléments sont disposés de bas en haut.</li></ul>',
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 2',
    instructions: {
      'en': '<p>Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
      'fr': '<p>Aidez les grenouilles à trouver leurs colonnes de nénuphars en utilisant <code>flex-direction</code>. Cette propriété CSS définit la direction dans laquelle les éléments sont placés dans le conteneur, et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>row</code>&nbsp;: Les éléments sont disposés dans la même direction que le texte.</li><li><code>row-reverse</code>&nbsp;: Les éléments sont disposés dans la direction opposée au texte.</li><li><code>column</code>&nbsp;: Les éléments sont disposés de haut en bas.</li><li><code>column-reverse</code>&nbsp;: Les éléments sont disposés de bas en haut.</li></ul>',
    },
    board: 'gyr',
    style: {'flex-direction': 'column'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 3',
    instructions: {
      'en': '<p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>',
      'fr': '<p>Aidez les grenouilles à arriver à leur propre nénuphar. Bien qu\'elles semblent près, il faudra autant <code>flex-direction</code> que <code>justify-content</code> pour y arriver.</p><p>Remarquez que quand vous mettez la direction inversée, le début et la fin sont aussi inversés.</p>',
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 4',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>',
      'fr': '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code> et <code>justify-content</code>.</p><p>Remarquez que quand la direction est en colonne, <code>justify-content</code> change pour la verticale et <code>align-items</code> pour l\'horizontale.</p>',
    },
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 5',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>',
      'fr': '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code> et <code>justify-content</code>.</p>',
    },
    board: 'gyr',
    style: {'flex-direction': 'column-reverse', 'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 6',
    instructions: {
      'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>',
      'fr': '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code>, <code>justify-content</code>, et <code>align-items</code>.</p>',
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'order 1',
    instructions: {
      'en': '<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>',
      'fr': '<p>Parfois, inverser l\'ordre de la rangée ou la colonne ne suffit pas. Dans ces cas, on peut appliquer la propriété <code>order</code> à des éléments individuels. Par défaut, les éléments ont une valeur de 0, mais on peut utiliser cette propriété pour changer la valeur à un entier positif ou négatif.</p><p>Utilisez la propriété <code>order</code> pour réorganiser les grenouilles par rapport à leurs nénuphars.</p>',
    },
    board: 'gyr',
    selector: '> :nth-child(2)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '2'},
    before: "#pond {\n  display: flex;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'order 2',
    instructions: {
      'en': '<p>Use the <code>order</code> property to send the red frog to his lilypad.</p>',
      'fr': '<p>Utilisez la propriété <code>order</code> pour envoyer la grenouille rouge à son nénuphar.</p>',
    },
    board: 'gggrg',
    selector: '> :nth-child(4)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '-1'},
    before: "#pond {\n  display: flex;\n}\n\n.red {\n",
    after: "}"
  },
  {
    name: 'align-self 1',
    instructions: {
      'en': '<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>',
      'fr': '<p>Une autre propriété que vous pouvez appliquer sur des éléments individuels est <code>align-self</code>. Cette propriété accepte les mêmes valeurs que <code>align-items</code>, mais s\'applique seulement à l\'élément ciblé.</p>',
    },
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: {'align-self': 'flex-end'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'align-self 2',
    instructions: {
      'en': '<p>Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.</p>',
      'fr': '<p>Combinez <code>order</code> et <code>align-self</code> pour aider les grenouilles à arriver à destination.</p>',
    },
    board: 'ygygg',
    selector: '> .yellow',
    style: {'align-self': 'flex-end', 'order': '2'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'flex-wrap 1',
    instructions: {
      'en': '<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>',
      'fr': '<p>Oh non! Les grenouilles sont écrasées dans une seule rangée de nénuphars. Distribuez-les en utilisant la propriété <code>flex-wrap</code>, qui accepte les valeurs suivantes&nbsp;:</p><ul><li><code>nowrap</code>&nbsp;: Tous les éléments sont tenus sur une seule ligne.</li><li><code>wrap</code>&nbsp;: Les éléments s\'enveloppent sur plusieurs lignes au besoin.</li><li><code>wrap-reverse</code>&nbsp;: Les éléments s\'enveloppent sur plusieurs lignes dans l\'ordre inversé.</li></ul>',
    },
    board: 'ygggggr',
    style: {'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-wrap 2',
    instructions: {
      'en': '<p>Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>',
      'fr': '<p>Aidez cette armée de grenouille à former trois belles colonnes en utilisant une combinaison de <code>flex-direction</code> et <code>flex-wrap</code>.</p>',
    },
    board: 'gggggrrrrryyyyy',
    style: {'flex-direction': 'column', 'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-flow 1',
    instructions: {
      'en': '<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>',
      'fr': '<p>Les deux propriétés <code>flex-direction</code> et <code>flex-wrap</code> sont utilisées tellement souvent ensembles que le raccourci <code>flex-flow</code> a été créé pour les combiner. Ce raccourci accepte les valeurs des deux propriétés séparées par un espace.</p><p>Par exemple, vous pouvez utiliser <code>flex-flow: row wrap</code> pour configurer les colonnes et les faire s\'envelopper.</p><p>Essayez d\'utiliser <code>flex-flow</code> pour répéter le niveau précédent.</p>',
    },
    board: 'gggggrrrrryyyyy',
    style: {'flex-flow': 'column wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-content 1',
    instructions: {
      'en': '<p>The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>',
      'fr': '<p>Les grenouilles sont éparpillées partout dans l\'étang, mais les nénuphars sont amassés dans le haut. Vous pouvez utiliser <code>align-content</code> pour définir comment plusieurs lignes sont espacées de l\'une à l\'autre. Cette propriété prend les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les lignes sont amassées dans le haut du conteneur.</li><li><code>flex-end</code>: Les lignes sont amassées dans le bas du conteneur.</li><li><code>center</code>&nbsp;: Les lignes sont amassées dans le centre vertical du conteneur.</li><li><code>space-between</code>&nbsp;: Les lignes s\'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les lignes s\'affichent avec un espace égal autour d\'eux.</li><li><code>stretch</code>&nbsp;: Les lignes sont étirées pour s\'adapter au conteneur.</li></ul><p>Ceci peut être déroutant, mais <code>align-content</code> détermine l\'espace entre les lignes, alors que <code>align-items</code> détermine comment les éléments dans leur ensemble sont alignées à l\'intérieur du conteneur. Quand il n\'y a qu\'une seule ligne, <code>align-content</code> n\'a aucun effet.</p>',
    },
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'},
    style: {'align-content': 'flex-start'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 2',
    instructions: {
      'en': '<p>Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.</p>',
      'fr': '<p>Maintenant, le courant a amassé tous les nénuphars dans le bas de l\'étang. Utilisez <code>align-content</code> pour guider les grenouilles vers le bas.</p>',
    },
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'},
    style: {'align-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 3',
    instructions: {
      'en': '<p>The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.</p>',
      'fr': '<p>Les grenouilles ont fait la fête, mais elles doivent maintenant retourner à la maison. Utilisez une combinaison de <code>flex-direction</code> et <code>align-content</code> pour les ramener à leurs nénuphars.</p>',
    },
    board: 'rgggyrgggyrgggy',
    classes: {'#pond, #background': 'wrap'},
    style: {'flex-direction': 'column-reverse', 'align-content': 'center'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 4',
    instructions: {
      'en': '<p>Bring the frogs home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      'fr': '<p>Ramenez les grenouilles à la maison une dernière fois en utilisant les propriétés CSS que vous avez apprises&nbsp;:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    },
    board: 'rggggyy',
    style: {'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="https://codepip.com/games/grid-garden/">Grid Garden</a> to learn about another powerful new feature of CSS layout. You can also find other coding games over at <a href="https://codepip.com/">Codepip</a>. And be sure to share Flexbox Froggy with your friends!</p>',
    'fr': '<p>Vous avez gagné! Grâce à votre maîtrise des flexbox, vous avez été capable d\'aider toutes les grenouilles à trouver leurs nénuphars. Regardez comment elles sautent de joie!</p><p>Si vous avez trouvé cela amusant, regardez mes autres projets sur mon <a href="https://thomaspark.co">blog</a> ou mon <a href="https://twitter.com/thomashpark">Twitter</a>, et assurez-vous de partager Flexbox Froggy avec vos amis!</p>',
  },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#pond, #background': 'wrap'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
