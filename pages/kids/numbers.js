import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Table } from "react-bootstrap";

export default function numbers() {
    return (
        <>
            <article>
                <div className="d-flex justify-content-between">
                    <div>
                        <h1>Learn about Numbers</h1>
                        <p>How high can you count?</p>
                        <p>
                            Here is a poem to help you remember the numbers
                            1-10.
                        </p>
                    </div>
                    <Image
                        src="/assets/images/kids/numbers-123blocks.gif"
                        alt="123 number blocks"
                        
                        width="300"
                        height="300"
                    />
                </div>
                <p>
                    <i>
                        One, two, buckle my shoe
                        <br />
                        Three, four, shut the door
                        <br />
                        Five, six, pick up sticks
                        <br />
                        Seven, eight, lay them straight
                        <br />
                        Nine, ten, a big fat hen
                    </i>
                </p>
                <p>
                    {" "}
                    Now, can you count higher? How about counting to one hundred
                    or one thousand? Use the{" "}
                    <Link href="numbers-chart">
                        <a>counting chart</a>
                    </Link>{" "}
                    to practice saying and writing the numbers 1-100. Then try
                    the{" "}
                    <Link href="numbers-quiz">
                        <a>counting quiz</a>
                    </Link>
                    . Soon you will be able to count to one billion!
                </p>
                <h2>Cardinal Numbers</h2>
                <p>
                    The numbers you use for counting are called "cardinal
                    numbers", for example:
                </p>
                <p>
                    <i>1, 2, 3, 4, 5, 6, 7, 8, 9, 10...</i>
                    <br />
                    <i>eleven, twelve, thirteen, fourteen, fifteen...</i>
                </p>
                <p>
                    Here are some other cardinal numbers you need to remember
                    for counting:
                </p>

                <Table className="small" responsive striped bordered>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>zero</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>one</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>ten</td>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td>one hundred</td>
                        </tr>
                        <tr>
                            <td>1,000</td>
                            <td>one thousand</td>
                        </tr>
                        <tr>
                            <td>1,000,000</td>
                            <td>one million</td>
                        </tr>
                        <tr>
                            <td>1,000,000,000</td>
                            <td>one billion</td>
                        </tr>
                    </tbody>
                </Table>

                <h2 className="d-flex justify-content-between">
                    Ordinal Numbers
                    <Image
                        src="/assets/images/kids/numbers-medal.gif"
                        alt="1st prize medal"
                        
                        width="200"
                        height="200"
                    />
                </h2>

                <p>
                    The numbers you use to talk about the order of things are
                    called "ordinal numbers", for example:
                </p>

                <p>
                    <i>
                        My horse came in first.
                        <br />I was the fifth person in line.
                    </i>
                </p>

                <p> Here are the first ten ordinal numbers:</p>

                <Table className="small" responsive striped bordered>
                    <tbody>
                        <tr>
                            <td className="text-info">
                                fir<u>st</u>
                            </td>
                            <td className="text-primary" align="right">
                                1<u>st</u>
                            </td>
                            <td className="text-info">sixth</td>
                            <td className="text-primary" align="right">
                                6th
                            </td>
                        </tr>
                        <tr>
                            <td className="text-info">
                                seco<u>nd</u>
                            </td>
                            <td className="text-primary" align="right">
                                2<u>nd</u>
                            </td>
                            <td className="text-info">seventh</td>
                            <td className="text-primary" align="right">
                                7th
                            </td>
                        </tr>
                        <tr>
                            <td className="text-info">
                                thi<u>rd</u>
                            </td>
                            <td className="text-primary" align="right">
                                3<u>rd</u>
                            </td>
                            <td className="text-info">eighth</td>
                            <td className="text-primary" align="right">
                                8th
                            </td>
                        </tr>
                        <tr>
                            <td className="text-info">
                                four<u>th</u>
                            </td>
                            <td className="text-primary" align="right">
                                4<u>th</u>
                            </td>
                            <td className="text-info">ninth</td>
                            <td className="text-primary" align="right">
                                9th
                            </td>
                        </tr>
                        <tr>
                            <td className="text-info">fifth</td>
                            <td className="text-primary" align="right">
                                5th
                            </td>
                            <td className="text-info">tenth</td>
                            <td className="text-primary" align="right">
                                10th
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <h2 className="d-flex justify-content-between">
                    Multiples
                    <Image
                        src="/assets/images/kids/numbers-icecream.gif"
                        alt="a triple ice-cream"
                        
                        width="200"
                        height="200"
                    />
                </h2>
                <p>
                    Sometimes numbers aren't expressed in cardinal or ordinal
                    numbers.
                </p>
                <p> Here are a few examples:</p>
                <p>
                    <i>
                        half (1/2)
                        <br />
                        single (1)
                        <br />
                        double (x2)
                        <br />
                        triple (x3)
                        <br />
                        quadruple (x4)
                    </i>
                </p>
                <p>
                    <i>
                        {" "}
                        a pair/couple (2)
                        <br />
                        a few (2 or 3)
                        <br />
                        several (more than 3 but not many)
                        <br />
                        a dozen (12)
                        <br />a half dozen (6)
                    </i>
                </p>
            </article>

            <nav >
                <ul>
                    <li>Numbers in English</li>
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
                    <li>
                        <Link href="numbers-maths">
                            <a>Numbers for Maths</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
