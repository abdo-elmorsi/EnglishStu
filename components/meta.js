import Head from "next/head";

const Meta = ({
    title = "EnglishStu | Learn or Teach English Today",
    keywords,
    description = "Free online resources for learning English 🇬🇧🇺🇸 or teaching it. From easy guides to grammar to fun games and quizzes for learning English.",
}) => {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <title>{title}</title>
            <meta
                name="keywords"
                content={
                    keywords +
                    ", English, EnglishStu, Learn, Teach english, Teaching, Exams, Young Learners, Schools, Academic, Professional, Business, Immigration, ESOL, Study English Online"
                }
            />
            <meta name="description" content={description} />
            <meta name="author" content="Abdelrahman Ahmed" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1"
            />
        </Head>
    );
};
export default Meta;
