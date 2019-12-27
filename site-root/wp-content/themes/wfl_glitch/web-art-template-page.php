<?php
/* Template Name: Web Art Template */
?>

<?php 
    $glitch_pageType = "webart"; 
    get_header(); 
?>

<?php
    echo '<style>' . get_field("web_art_css") . '</style>';

    echo get_field("web_art_html");

    echo '<script>' . get_field("web_art_js") . '</script>';
?>

</div>
</body>
</html>