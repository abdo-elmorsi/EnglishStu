import React from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";

export default function Test_yourself() {
    return (
        <Card>
            <Card.Header>
                <h1 className="text-center">20 Grammar Rules</h1>
            </Card.Header>
            <Card.Body>
                <p>
                    Here are 20 simple rules and tips to help you avoid mistakes
                    in English grammar. For more comprehensive rules please look
                    under the appropriate topic (part of speech etc) on our{" "}
                    <Link href="https://english-stu.vercel.app/grammar">
                        <a>
                            {" "}
                            <strong>grammar</strong>
                        </a>
                    </Link>{" "}
                    and other pages.
                </p>

                <p>
                    <strong>
                        1. A sentence starts with a capital letter and ends with
                        a period/full stop, a question mark or an exclamation
                        mark.
                    </strong>
                </p>
                <ul>
                    <li>
                        <span className="text-info fw-bold">
                            <em>T</em>
                        </span>
                        <em>
                            he fat cat sat on the mat
                            <span className="clr-green-bold fw-bold">.</span>
                        </em>
                    </li>
                    <li>
                        <em>
                            <span className="text-info fw-bold">W</span>
                            here do you live
                            <span className="text-info fw-bold">?</span>
                        </em>
                    </li>
                    <li>
                        <em>
                            <span className="text-info fw-bold">M</span>y dog is
                            very clever
                            <span className="text-info fw-bold">!</span>
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        2. The order of a basic positive sentence is
                        Subject-Verb-Object. (Negative and question sentences
                        may have a different order.)
                    </strong>
                </p>
                <ul>
                    <li>
                        <span className="text-info">
                            <em>John loves Mary</em>
                        </span>
                        <em>.</em>
                    </li>
                    <li>
                        <span className="text-info">
                            <em>They were driving their car</em>
                        </span>
                        <em> to Bangkok.</em>
                    </li>
                </ul>

                <p>
                    <strong>
                        3. Every sentence must have a subject and a verb. An
                        object is optional. Note that an imperative sentence may
                        have a verb only, but the subject is understood.
                    </strong>
                </p>
                <ul>
                    <li>
                        <span className="text-info">
                            <em>John teaches</em>
                        </span>
                        <em>.</em>
                    </li>
                    <li>
                        <span className="text-info">
                            <em>John teaches</em>
                        </span>
                        <em> English.</em>
                    </li>
                    <li>
                        <em>
                            Stop! (i.e.{" "}
                            <span className="text-info">You stop</span>
                            !)
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        4. The{" "}
                        <a href="/grammar/subject-verb-agreement.htm">
                            subject and verb must agree in number
                        </a>
                        , that is a singular subject needs a singular verb and a
                        plural subject needs a plural verb.
                    </strong>
                </p>
                <ul>
                    <li>
                        <em>
                            John <span className="text-info">works</span> in
                            London.
                        </em>
                    </li>
                    <li>
                        <em>
                            That monk <span className="text-info">eats</span>{" "}
                            once a day.
                        </em>
                    </li>
                    <li>
                        <em>
                            John and Mary{" "}
                            <span className="text-info">work</span> in London.
                        </em>
                    </li>
                    <li>
                        <em>
                            Most people <span className="text-info">eat</span>{" "}
                            three meals a day.
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        5. When two singular subjects are connected by{" "}
                        <em>or</em>, use a singular verb. The same is true for{" "}
                        <em>either/or</em> and <em>neither/nor</em>.
                    </strong>
                </p>
                <ul>
                    <li>
                        {" "}
                        <em>
                            John or Mary <span className="text-info">is</span>{" "}
                            coming tonight.
                        </em>
                    </li>
                    <li>
                        <em>
                            Either coffee or tea{" "}
                            <span className="text-info">is</span> fine.
                        </em>
                    </li>
                    <li>
                        <em>
                            Neither John nor Mary{" "}
                            <span className="text-info">was</span> late.
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        6.{" "}
                        <a href="/grammar/adjectives-order.htm">
                            Adjectives usually come before a noun
                        </a>{" "}
                        (except when a verb separates the adjective from the
                        noun).
                    </strong>
                </p>
                <ul>
                    <li>
                        <em>
                            I have a <span className="text-info">big</span> dog.
                        </em>
                    </li>
                    <li>
                        <em>
                            She married a{" "}
                            <span className="text-info">handsome Italian</span>{" "}
                            man.
                        </em>
                    </li>
                    <li>
                        <em>
                            (Her husband is{" "}
                            <span className="text-info">rich</span>
                            .)
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        7. When using two or more adjectives together, the usual
                        order is{" "}
                        <a href="/grammar/adjectives-order.htm">
                            opinion-adjective + fact-adjective + noun
                        </a>
                        . (There are some additional rules for the order of fact
                        adjectives.)
                    </strong>
                </p>
                <ul>
                    <li>
                        <em>
                            I saw a{" "}
                            <span className="text-info">nice French</span>{" "}
                            table.
                        </em>
                    </li>
                    <li>
                        <em>
                            That was an{" "}
                            <span className="text-info">
                                interesting Shakespearian
                            </span>{" "}
                            play.
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        8. Treat{" "}
                        <a href="/grammar/subject-verb-agreement-collective-nouns.htm">
                            collective nouns
                        </a>{" "}
                        (e.g. committee, company, board of directors) as
                        singular OR plural. In BrE a collective noun is usually
                        treated as plural, needing a plural verb and pronoun. In
                        AmE a collective noun is often treated as singular,
                        needing a singular verb and pronoun.
                    </strong>
                </p>
                <ul>
                    <li>
                        <em>
                            The committee <span className="text-info">are</span>{" "}
                            having sandwiches for lunch. Then{" "}
                            <span className="text-info">they</span> will go to
                            London. (typically BrE)
                        </em>
                    </li>
                    <li>
                        <em>
                            The BBC <span className="text-info">have</span>{" "}
                            changed <span className="text-info">their</span>{" "}
                            logo. (typically BrE)
                        </em>
                    </li>
                    <li>
                        <em>
                            My family <span className="text-info">likes</span>{" "}
                            going to the zoo. (typically AmE)
                        </em>
                    </li>
                    <li>
                        <em>
                            CNN <span className="text-info">has</span> changed{" "}
                            <span className="text-info">its</span> logo.
                            (typically AmE)
                        </em>
                    </li>
                </ul>

                <p>
                    {" "}
                    <strong>
                        9. The words{" "}
                        <em>
                            <a href="https://www.englishclub.com/vocabulary/cw-its-its.htm">
                                its
                            </a>
                        </em>
                        <a href="/vocabulary/cw-its-its.htm">
                            {" "}
                            and <em>it's</em>
                        </a>{" "}
                        are two different words with different meanings.
                    </strong>
                </p>
                <ul>
                    <li>
                        <em>
                            The dog has hurt{" "}
                            <span className="text-info">its</span> leg.
                        </em>
                    </li>
                    <li>
                        <em>
                            He says <span className="text-info">it's</span> two
                            o'clock.
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        10. The words <em>your</em> and <em>you're</em> are two
                        different words with different meanings.
                    </strong>
                </p>
                <ul>
                    <li>
                        <em>
                            Here is <span className="text-info">your</span>{" "}
                            coffee.
                        </em>
                    </li>
                    <li>
                        <em>
                            <span className="text-info">You're</span> looking
                            good.
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        11. The words{" "}
                        <a href="/vocabulary/cw-there-their-theyre.htm">
                            <em>there</em>, <em>their</em> and <em>they're</em>
                        </a>{" "}
                        are three different words with different meanings.
                    </strong>
                </p>
                <ul>
                    <li>
                        <span className="text-info">
                            <em>There</em>
                        </span>
                        <em> was nobody at the party.</em>
                    </li>
                    <li>
                        <em>
                            I saw <span className="text-info">their</span> new
                            car.
                        </em>
                    </li>
                    <li>
                        <em>
                            Do you think{" "}
                            <span className="text-info">they're</span> happy?
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        12. The contraction <em>he's</em> can mean{" "}
                        <em>he is</em> OR <em>he has</em>. Similarly,{" "}
                        <em>she's</em> can mean <em>she is</em> OR{" "}
                        <em>she has</em>, and <em>it's</em> can mean{" "}
                        <em>it is</em> OR <em>it has</em>, and <em>John's</em>{" "}
                        can mean <em>John is</em> OR <em>John has</em>.
                    </strong>
                </p>
                <ul>
                    <li>
                        <span className="text-info">
                            <em>He is</em>
                        </span>
                        <em> working</em>
                    </li>
                    <li>
                        <em>
                            <span className="text-info">He has</span> finished.
                        </em>
                    </li>
                    <li>
                        <em>
                            <span className="text-info">She is</span> here.
                        </em>
                    </li>
                    <li>
                        <em>
                            <span className="text-info">She has</span> left.
                        </em>
                    </li>
                    <li>
                        <em>
                            <span className="text-info">John is</span> married.
                        </em>
                    </li>
                    <li>
                        <em>
                            <span className="text-info">John has</span> divorced
                            his wife.
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        13. The contraction <em>he'd</em> can mean{" "}
                        <em>he had</em> OR <em>he would</em>. Similarly,{" "}
                        <em>they'd</em> can mean <em>they had</em> OR{" "}
                        <em>they would</em>.
                    </strong>
                </p>
                <ul>
                    <li>
                        <span className="text-info">
                            <em>He had</em>
                        </span>
                        <em> eaten when I arrived.</em>
                    </li>
                    <li>
                        <span className="text-info">
                            <em>He would</em>
                        </span>
                        <em> eat more if possible.</em>
                    </li>
                    <li>
                        <span className="text-info">
                            <em>They had</em>
                        </span>
                        <em> already finished.</em>
                    </li>
                    <li>
                        <span className="text-info">
                            <em>They would</em>
                        </span>
                        <em> come if they could.</em>
                    </li>
                </ul>

                <p>
                    <strong>
                        14. Spell a proper noun with an initial capital letter.
                        A{" "}
                        <a href="/grammar/nouns-proper.htm">
                            proper noun is a "name" of something
                        </a>
                        , for example Josef, Mary, Russia, China, British
                        Broadcasting Corporation, English.
                    </strong>
                </p>
                <ul>
                    <li>
                        <em>
                            We have written to{" "}
                            <span className="text-info">Mary</span>.
                        </em>
                    </li>
                    <li>
                        <em>
                            Is <span className="text-info">China</span> in{" "}
                            <span className="text-info">Asia</span>?
                        </em>
                    </li>
                    <li>
                        <em>
                            Do you speak{" "}
                            <span className="text-info">English</span>?
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        15. Spell proper adjectives with an initial capital
                        letter. Proper adjectives are made from proper nouns,
                        for example Germany → German, Orwell → Orwellian,
                        Machiavelli → Machiavellian
                    </strong>
                    .
                </p>
                <ul>
                    <li>
                        <em>
                            London is an{" "}
                            <span className="text-info">English</span> town.
                        </em>
                    </li>
                    <li>
                        <em>
                            Who is the{" "}
                            <span className="text-info">Canadian</span> prime
                            minister?
                        </em>
                    </li>
                    <li>
                        <em>
                            Which is your favourite{" "}
                            <span className="text-info">Shakespearian</span>{" "}
                            play?
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        16. Use the{" "}
                        <a href="/grammar/determiners-articles.htm">
                            indefinite article <em>a/an</em>
                        </a>{" "}
                        for countable nouns in general. Use the{" "}
                        <a href="/grammar/determiners-articles.htm">
                            definite article <em>the</em>
                        </a>{" "}
                        for specific countable nouns and all uncountable nouns.
                    </strong>
                </p>
                <ul>
                    <li>
                        <em>
                            I saw <span className="text-info">a bird</span> and{" "}
                            <span className="text-info">a balloon</span> in the
                            sky. <span className="text-info">The bird</span> was
                            blue and{" "}
                            <span className="text-info">the balloon</span> was
                            yellow.
                        </em>
                    </li>
                    <li>
                        <em>
                            He always saves some of{" "}
                            <span className="text-info">the money</span> that he
                            earns.
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        17. Use the indefinite article <em>a</em> with words
                        beginning with a consonant sound. Use the indefinite
                        article <em>an</em> with words beginning with a vowel
                        sound.{" "}
                    </strong>
                    see{" "}
                    <a href="/pronunciation/a-an.htm">
                        When to Say <em>a</em> or <em>an</em>
                    </a>
                </p>
                <ul>
                    <li>
                        <span className="text-info">
                            <em>a c</em>
                        </span>
                        <em>
                            at, <span className="text-info">a g</span>
                            ame of golf, <span className="text-info">a h</span>
                            uman endeavour,{" "}
                            <span className="text-info">a F</span>
                            renchman, <span className="text-info">a u</span>
                            niversity (<span className="text-info">you</span>
                            -ni-ver-si-ty)
                        </em>
                    </li>
                    <li>
                        <em>
                            {" "}
                            <span className="text-info">an a</span>
                            pple, <span className="text-info">an e</span>
                            asy job, <span className="text-info">an i</span>
                            nteresting story,{" "}
                            <span className="text-info">an o</span>
                            ld man, <span className="text-info">an u</span>
                            mbrella, <span className="text-info">an h</span>
                            onorable man (<span className="text-info">on</span>
                            -o-ra-ble)
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        18. Use <em>many</em> or <em>few</em> with countable
                        nouns. Use <em>much/a lot</em> or <em>little</em> for
                        uncountable nouns.
                    </strong>{" "}
                    see{" "}
                    <a href="https://www.englishclub.com/grammar/determiners-quantifiers.htm">
                        Quantifiers
                    </a>
                </p>
                <ul>
                    <li>
                        <span className="text-info">
                            <em>How many dollars</em>
                        </span>
                        <em> do you have?</em>
                    </li>
                    <li>
                        <span className="text-info">
                            <em>How much money</em>
                        </span>
                        <em> do you have?</em>
                    </li>
                    <li>
                        <em>
                            There are{" "}
                            <span className="text-info">a few cars</span>{" "}
                            outside.
                        </em>
                    </li>
                    <li>
                        <em>
                            There is{" "}
                            <span className="text-info">little traffic</span> on
                            the roads.
                        </em>
                    </li>
                </ul>

                <p>
                    <strong>
                        19. To show possession (
                        <a href="/grammar/nouns-possessive.htm">
                            who is the owner of something
                        </a>
                        ) use an <em>apostrophe + s</em> for singular owners,
                        and <em>s + apostrophe</em> for plural owners.
                    </strong>
                </p>
                <ul>
                    <li>
                        <em>
                            The boy
                            <span className="text-info">'s</span> dog.
                        </em>{" "}
                        (one boy)
                    </li>
                    <li>
                        <em>
                            The boy
                            <span className="text-info">s'</span> dog.
                        </em>{" "}
                        (two or more boys)
                    </li>
                </ul>

                <p>
                    <strong>
                        20. In general, use the active voice (Cats eat fish) in
                        preference to the{" "}
                        <a href="/grammar/passive-voice.htm">passive voice</a>{" "}
                        (Fish are eaten by cats).
                    </strong>
                </p>
                <ul>
                    <li>
                        We{" "}
                        <span className="text-info">
                            <em>use</em>
                        </span>
                        <em> active in preference to passive.</em>
                    </li>
                    <li>
                        <em>
                            Active <span className="text-info">is used</span> in
                            preference to passive.
                        </em>
                    </li>
                </ul>

                <nav>
                    <Link href="/grammar/quizzes">
                        <a> Grammar Quizzes</a>
                    </Link>
                </nav>
                <nav>
                    <Link href="/grammar">
                        <a>Grammar main page</a>
                    </Link>
                </nav>

                <nav>
                    <Link href="/" title="Go to EnglishStu home page">
                        <a>EnglishStu</a>
                    </Link>{" "}
                    : :
                    <Link href="/grammar">
                        <a>Grammar</a>
                    </Link>{" "}
                    : Grammar Rules
                </nav>
            </Card.Body>
        </Card>
    );
}
