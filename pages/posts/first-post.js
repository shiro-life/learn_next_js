import Link from 'next/link'

export default function FirstPost(){
    return (
        <>
        <h1><b>This is Assignment for Introduction Computer Science</b></h1>
        <h2><i>My name is So Seung Soo</i></h2>
        <h2><i>It is my first time to using next.js</i></h2>
        <h3>What is the <mark>'Cat'?</mark></h3>
        <p>The 'cat' is one of the cute animal in the world.</p>
        <h3>
            <Link href="/">
                <a>Click if you want to go back!</a>
            </Link>
        </h3>
        
        </>
    )
}