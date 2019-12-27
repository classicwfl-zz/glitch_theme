<?php 
    $glitch_pageType = "page"; 
    get_header(); 
?>
<main id="content">
    <div class="glitch_pageHead">
        <header class="header">
            <h1 class="entry-title"><?php echo get_field("h1"); ?></h1>
            <h2><?php echo get_field("h2") ?></h2>
        </header>
    </div>

    <div class="glitch_container">
        <div class="glitch_column--full">
        <?php the_content(); ?>
        </div>
    </div>

    <div class="glitch_container">
        <div class="glitch_column--full glitch_featureBox center">
            <h3 class="glitch_massiveType"><?php echo get_field("quote"); ?></h3>
            <h4>-<?php echo get_field("quote_author"); ?></h4>
        </div>
    </div>

</main>
<?php get_footer(); ?>