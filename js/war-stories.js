// war-template.js
// Auto-generates war pages for wars that don't have dedicated pages yet
// Used by era pages and war pages that link to non-existent pages

window.WAR_STORIES = {

  'seven-years-war': {
    title: "The Seven Years' War",
    era: "Early Modern Era · 1756–1763",
    hero_image: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Kunersdorf_by_Alexander_Kotzebue.jpg",
    subtitle: "Earth's first World War — before the term existed",
    duration: "1756–1763",
    location: "Five Continents",
    casualties: "~1.4 Million",
    result: "British Supremacy",
    chapters: [
      {
        title: "The War That Spanned the Globe",
        content: `The Seven Years' War is arguably the first true World War — fought across <span class="place">Europe, North America, South America, Africa, India,</span> and the <span class="place">Philippines</span> simultaneously. Frederick the Great called it the most dangerous war he ever fought. Britain emerged as the world's dominant colonial power. France lost most of its empire. And virtually nobody outside academic circles seems to know it happened. This is a crime against historical education.

The war began in <span class="place">Europe</span> over a simple question: who controls <span class="place">Silesia</span>? Austria wanted it back from Prussia. Prussia (<span class="person">Frederick II "the Great"</span>) had stolen it in the previous war and wasn't giving it back. Simple enough. But the web of alliances meant that this dispute between Austria and Prussia soon involved <span class="highlight">every major European power</span>.

The remarkable thing about this war is its truly global scale. While Frederick was fighting off France, Austria, Russia, and Sweden simultaneously in Europe (and somehow not dying), Britain and France were fighting each other everywhere else on Earth.`
      },
      {
        title: "Britain's Big Gamble",
        content: `<span class="person">William Pitt the Elder</span> was the British minister who transformed the war from a European sideshow into a global strategy. His insight: let Prussia fight the main European battles while Britain used its navy to capture France's colonial empire. It was the <span class="date">1750s</span> equivalent of outsourcing.

The results were extraordinary. Britain captured Quebec and with it <span class="place">Canada</span>. Captured major French trading posts in <span class="place">West Africa</span>. Captured <span class="place">Martinique</span> and other Caribbean islands. In <span class="place">India</span>, <span class="person">Robert Clive</span>'s extraordinary victory at Plassey (1757) effectively handed the subcontinent's richest province to the British East India Company. The groundwork for the British Empire was laid in this war.

When the Peace of Paris ended the conflict in <span class="date">1763</span>, Britain was indisputably the world's greatest colonial power. France was financially ruined and furious. That fury would have significant consequences — France spent the next twenty years funding revolutionary movements in Britain's American colonies specifically to revenge itself. Without the Seven Years' War, there might have been no American Revolution.`
      }
    ]
  },

  'american-revolution': {
    title: "The American Revolutionary War",
    era: "Early Modern Era · 1775–1783",
    hero_image: "https://commons.wikimedia.org/wiki/Special:FilePath/Scene_at_the_Signing_of_the_Constitution_of_the_United_States.jpg",
    subtitle: "No taxation without representation — the world's most expensive tea argument",
    duration: "1775–1783",
    location: "North America",
    casualties: "~50,000",
    result: "American Independence",
    chapters: [
      {
        title: "Britain's Tea-Based Tantrum",
        content: `Let's establish context: Britain had just fought the Seven Years' War and was deeply in debt. The British government, with impeccable logic, decided the American colonies should help pay for a war fought to protect them. The Americans, with equally impeccable logic, pointed out they had no representatives in Parliament and therefore taxing them without representation was, constitutionally speaking, outrageous.

The <span class="highlight">Stamp Act, Townshend Acts,</span> and various other taxes followed. Americans boycotted British goods, organized protests, and expressed themselves through pamphlets with names like "Common Sense" and "The Rights of Man." Then, in <span class="date">December 1773</span>, colonial activists dressed as Native Americans boarded British ships in <span class="place">Boston Harbour</span> and threw 342 chests of tea into the water. The <span class="highlight">Boston Tea Party</span> was the colonies' official statement that they were done complying.

Britain's response — closing Boston's port, restricting colonial self-government, and quartering troops in colonial homes — unified a previously divided colonial population in a way that no pamphlet ever had. By <span class="date">April 1775</span>, shots were being fired at Lexington and Concord. The war had begun.`
      },
      {
        title: "Washington's Remarkable Persistence",
        content: `<span class="person">George Washington</span> was not, it must be said, a brilliant tactician. He lost more battles than he won. His strength was something more valuable: he never completely lost, he kept his army together when it should have dissolved, and he understood that he didn't need to defeat Britain militarily — he just needed to not lose long enough for Britain to give up.

The turning point came at <span class="place">Saratoga</span> in <span class="date">1777</span>, where American General Gates defeated a British army. More importantly, it convinced <span class="place">France</span> — still furious about the Seven Years' War — to enter the conflict on America's side. France provided money, troops, and crucially, naval power. Spain joined shortly after. Britain found itself fighting not just colonists but the combined power of France, Spain, and the Netherlands.

The war ended at <span class="place">Yorktown</span> in <span class="date">1781</span>, when Washington and French General Rochambeau trapped <span class="person">General Cornwallis</span> against the sea while the French fleet prevented British naval relief. Cornwallis surrendered. The British band allegedly played a tune called "The World Turned Upside Down." They were not wrong.`
      }
    ]
  },

  'vietnam-war': {
    title: "The Vietnam War",
    era: "Cold War · 1955–1975",
    hero_image: "https://commons.wikimedia.org/wiki/Special:FilePath/Saigon-68-helicopter.jpg",
    subtitle: "America's most expensive geography lesson",
    duration: "1955–1975",
    location: "Vietnam, Laos, Cambodia",
    casualties: "~3.5 Million",
    result: "North Vietnam Victory",
    chapters: [
      {
        title: "The Domino Theory and How It Destroyed a Country",
        content: `American involvement in <span class="place">Vietnam</span> rested on a theory: that if one country fell to communism, its neighbours would follow like dominoes. Applied to Southeast Asia, this meant that <span class="place">Vietnam</span>'s fate determined the fate of Thailand, Malaysia, Indonesia, and eventually all of Asia. The theory was simple, compelling, and almost entirely wrong — but it sent 58,000 Americans and over a million Vietnamese to their deaths before anyone in power admitted this.

Vietnam had been a French colony since the 19th century. <span class="person">Ho Chi Minh</span> had fought for independence — first from France, then from Japan during WW2. When the French returned after the war, he fought them too. At the Geneva Conference in <span class="date">1954</span>, Vietnam was temporarily divided at the 17th parallel: Ho Chi Minh's communist North, and a US-backed South. Elections were supposed to reunify the country in 1956. The US cancelled the elections when intelligence confirmed Ho Chi Minh would win.`
      },
      {
        title: "The Quagmire Nobody Could Escape",
        content: `By <span class="date">1965</span>, the US had 184,000 troops in Vietnam. By 1969, it had 543,000. Faced with an enemy that fought using guerrilla tactics — avoiding pitched battles, hiding among the civilian population, using the jungle — American military doctrine was poorly suited. The US Air Force dropped more bombs on Vietnam than were dropped by all sides in WW2. The country's infrastructure was comprehensively destroyed. The enemy kept fighting.

At home, the war was tearing America apart. The nightly news showed footage of casualties. <span class="highlight">The Tet Offensive</span> in 1968 — in which North Vietnamese and Viet Cong forces launched simultaneous attacks on 100 South Vietnamese cities — demonstrated that despite years of official optimism, the enemy was far from defeated. Walter Cronkite, America's most trusted news anchor, looked into the camera and said the war appeared to be a stalemate. <span class="person">President Johnson</span> reportedly said "If I've lost Cronkite, I've lost Middle America."

American troops withdrew in <span class="date">1973</span>. South Vietnam fell to North Vietnamese forces in <span class="date">1975</span>. The dominos, contrary to the theory, did not fall. Vietnam is today a communist country with a booming economy that sells large quantities of goods to the United States. Nobody discusses the irony with sufficient frequency.`
      }
    ]
  },

  'ww1': {
    title: "World War I",
    era: "The Great War · 1914–1918",
    hero_image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cheshire_Regiment_trench_Somme_1916.jpg",
    subtitle: "One assassination. Four years. Thirty-seven million casualties.",
    duration: "1914–1918",
    location: "Europe, Middle East, Africa",
    casualties: "~37 Million",
    result: "Allied Victory, German Collapse",
    chapters: [
      {
        title: "How One Assassination Started a World War",
        content: `On <span class="date">June 28, 1914</span>, Archduke <span class="person">Franz Ferdinand</span> of Austria-Hungary was shot in <span class="place">Sarajevo</span> by <span class="person">Gavrilo Princip</span>, a 19-year-old Bosnian Serb nationalist. This is one of history's great "if only" moments: the assassination almost didn't happen. The original bomb attack had failed. Princip was eating a sandwich in a nearby café, having abandoned the plan, when Franz Ferdinand's car took a wrong turn and stopped directly in front of him. Princip shot twice. Both shots were fatal.

What followed should not have happened. A political assassination — however tragic — between Austria-Hungary and Serbia should not have become a global war. But Europe in 1914 was a powder keg: entangled alliances, arms races, rising nationalism, military plans that once set in motion couldn't be stopped. Austria-Hungary declared war on Serbia. Russia mobilized to protect Serbia. Germany mobilized to counter Russia. France mobilized. Germany invaded France through Belgium. Britain declared war to protect Belgium's neutrality. In five weeks, a Sarajevo shooting became a continental catastrophe.`
      },
      {
        title: "The Trenches: A New Kind of Hell",
        content: `Both sides expected a short war — "over by Christmas," they said. Instead, the armies dug in. From the <span class="place">English Channel</span> to the <span class="place">Swiss Alps</span>, over 700 kilometers of trenches were cut into the earth. Millions of men lived in these muddy ditches for years, under constant shellfire, plagued by rats, rotting feet, and the constant random reality of death by sniper, gas, or artillery.

The numbers defy comprehension. The Battle of the <span class="highlight">Somme</span> in 1916: on the first day alone, the British suffered 57,000 casualties — including nearly 20,000 dead. In four months of fighting, the Allies advanced roughly 10 kilometers. The Battle of <span class="highlight">Verdun</span>: ten months of fighting, an estimated 700,000 casualties, to gain and lose approximately nothing. Commanders sent men in waves across open ground against machine guns and barbed wire, and when the waves were cut down, they sent more waves. The definition of insanity.

New horrors were invented: <span class="highlight">poison gas</span> (first used on a large scale at Ypres in 1915), <span class="highlight">tanks</span>, strategic bombing, and submarine warfare that came close to starving Britain into defeat.`
      },
      {
        title: "The War Ends, And Sets Up the Next One",
        content: `America entered the war in <span class="date">1917</span>, tipping the balance. Germany, blockaded and exhausted, began to crack. By <span class="date">November 1918</span>, the Kaiser had abdicated, Germany was in revolution, and at 11am on the 11th day of the 11th month, the guns fell silent. The <span class="highlight">Armistice</span> was signed in a railway carriage in the Forest of Compiègne.

The <span class="highlight">Treaty of Versailles</span> that followed imposed total blame on Germany, demanded reparations Germany could not pay, and dismembered empires while creating unstable new nations. Economist <span class="person">John Maynard Keynes</span>, who attended the conference, published "The Economic Consequences of the Peace" shortly after — arguing the treaty would create exactly the conditions for another, worse war. He was not wrong. The "War to End All Wars" ended. The conditions for the next one were immediately, carefully, and apparently deliberately created.`
      }
    ]
  }
};
