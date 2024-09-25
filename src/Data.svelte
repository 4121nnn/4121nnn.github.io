<script>
    const javaStreamsLink = "https://github.com/4121nnn/JavaStreams";
    const algorithmVisualizer = "https://github.com/4121nnn/algorithm_visualiser";
    const minesweeperLink = "https://github.com/4121nnn/Minesweeper";
</script>

<main class="">
    <h2 class="text-header">About Me</h2>
    <p class="border-l text-sm border-color pl-3">
        Passionate about technology and creativity.<br>
        I have a strong interest in <span class="yellow-mark">Java</span>, <span class="yellow-mark">Spring Boot</span>, <span class="yellow-mark">Microservices</span>, and related technologies. I’m excited to take on new projects to grow. I look forward to connecting with others in the tech community!
    </p>
    <h2 class="text-header">Projects</h2>


    <!--  Java Streams  -->
    <div class=" text-sm mt-5">
        <p class="text-base">Java Streams</p>
        <div class="border-l mt-3 border-color pl-3">
            <p>A project to practice the Java Streams API.
                This project is built using Spring Boot and
                React.
                <a class="blue-color hover:underline"
                   href={javaStreamsLink}
                   target="_blank" rel="noopener noreferrer">
                    See more
                </a>
            </p>
        </div>
    </div>

    <!--  Algorithm visualiser  -->
    <div class=" text-sm mt-5">
        <p class="text-base">Algorithm Visualiser</p>
        <div class="border-l mt-3 border-color pl-3">
            <p>A web application visualizes various pathfinding algorithms.
                Built with Spring Boot, Thymeleaf and htmx.
                <a class="blue-color hover:underline"
                   href={algorithmVisualizer}
                   target="_blank" rel="noopener noreferrer">
                    See more
                </a>
            </p>
        </div>
    </div>

    <!--  Minesweeper  -->
    <div class=" text-sm mt-5">
        <a class="text-base">Minesweeper</a>
        <div class="border-l mt-3 border-color pl-3">
            <p>A desktop game Minesweeper.
                Built with JavaFX.
                <a class="blue-color hover:underline"
                   href={minesweeperLink}
                   target="_blank" rel="noopener noreferrer">
                    See more
                </a>
            </p>
        </div>
    </div>

</main>

<style>
.text-header{
    @apply text-xl font-extrabold mb-2 mt-7;
}

</style>