import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Table } from "react-bootstrap";

export default function numbers() {
    return (
        <>
            <article>
                <h1>Numbers and Symbols for Maths</h1>

                <p>
                    The short form of <em>mathematics</em> in British English is{" "}
                    <strong>maths</strong> and in American English it's{" "}
                    <strong>math</strong>.
                </p>

                <div className="d-flex justify-content-between">
                    <p className="flex-1">
                        Can you add, subtract and do your multiplication tables
                        in English? Before you can do the math you need to
                        understand the question. Learning English for math means
                        learning numbers, words, and symbols.
                    </p>
                    <Image
                        src="/assets/images/kids/numbers-math.gif"
                        alt="greenboard with simple maths"
                        className="flex-2"
                        width="400"
                        height="300"
                    />
                </div>

                <h2>Addition +</h2>

                <p>
                    1 + 2 = 3<br />
                    Five plus three equals eight.
                    <br />
                    One and six is seven.
                </p>
                <h2>Subtraction -</h2>

                <p>
                    7 - 6 = 1<br />
                    Three minus two equals one.
                    <br />
                    Eighteen subtract four is fourteen.
                </p>

                <h2>Multiplication x</h2>

                <p>
                    5 x 6 = 30
                    <br />
                    Seven times three equals twenty-one.
                    <br />
                    Two multiplied by three is six.
                </p>

                <h2>Division ÷</h2>

                <p>
                    9 ÷ 3 = 3<br />
                    Six divided by three equals two.
                    <br />
                    Five goes into fifteen three times.
                </p>
                <h2>Other Maths Symbols:</h2>

                <Table  responsive striped bordered>
                    <tbody>
                        <tr>
                            <td>&lt;</td>
                            <td>less than</td>
                        </tr>
                        <tr>
                            <td>&gt;</td>
                            <td>greater than</td>
                        </tr>
                        <tr>
                            <td>¼</td>
                            <td>fractions</td>
                        </tr>
                        <tr>
                            <td>%</td>
                            <td>percent</td>
                        </tr>
                        <tr>
                            <td>90°</td>
                            <td>degrees</td>
                        </tr>
                        <tr>
                            <td>1.666</td>
                            <td>decimals</td>
                        </tr>
                    </tbody>
                </Table>

                <h2>Word problems</h2>

                <p>
                    Word problems are maths questions written in sentences. Here
                    are some for you to try!
                </p>

                <ol>
                    <li>
                        Two monkeys collected 15 bananas. One monkey collected 7
                        bananas. How many bananas did the other monkey collect?
                    </li>
                    <li>
                        Johnny had six apples on Sunday. On Monday, Johnny gave
                        Sally half of his apples. On Tuesday, he ate one of his
                        apples. How many apples did Johnny have left on
                        Wednesday?
                    </li>
                    <li>
                        Three women <i>thought</i> they were pregnant with
                        twins. Two of the women were right. The third woman was
                        surprised with triplets. How many babies were born?
                    </li>
                </ol>

                <p>
                    <em>
                        Answers: Question 3: 7. Question 1: 8. Question 2: 2.
                    </em>
                </p>
            </article>

            <nav>
                <a className="arrowNext" href="numbers-game.htm">
                    Numbers Trivia Game
                </a>
            </nav>

            <nav >
                <ul>
                    <li>
                        <Link href="numbers">
                            <a>Numbers in English</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="numbers-chart">
                            <a> Counting Chart 1-100</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="numbers-quiz">
                            <a>Counting Quiz</a>
                        </Link>
                    </li>
                    <li>Numbers for Maths</li>
                </ul>
            </nav>
        </>
    );
}
