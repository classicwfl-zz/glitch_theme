<?php
/* Template Name: Service Page Template */
?>

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
        <div class="glitch_column">
            <?php echo get_field("service_intro") ?>
        </div>
        <div class="glitch_column center">
            <h3>The latest from my library:</h3>
            <?php
                $serviceType = get_field("service_type");
                if ($serviceType == "photography") {
                    ?><!-- Latest Photo -->
                    <?php 
                    $args = array(
                        'post_type'              => array( 'photography' ),
                        'posts_per_page'         => '1',
                    );

                    $latest_photo = new WP_Query( $args ); 
                    while ($latest_photo -> have_posts()) : $latest_photo -> the_post(); ?>
                    <p class="glitch_termType font_lowercase">
                    <a href="<?php the_permalink() ?>"><img src="
                        <?php 
                        $thumb_url = wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()), 'full' );
                        echo $thumb_url;
                        ?>" class="glitch_respImg" /></a>
                        <br /><a href="<?php the_permalink() ?>"><?php
                        $post_title = glitch_convertToTermType(get_the_title());
                        echo $post_title;
                    ?></a>.jpg</p>
                    <?php 
                        endwhile;
                        wp_reset_postdata();
                    ?>
                    <?php
                } elseif ($serviceType == "studio") {
                    ?><!-- Latest Record -->
                    <?php 
                    $args = array(
                        'post_type'              => array( 'records' ),
                        'posts_per_page'         => '1',
                    );

                    $latest_photo = new WP_Query( $args ); 
                    while ($latest_photo -> have_posts()) : $latest_photo -> the_post(); ?>
                    <p class="glitch_termType font_lowercase">
                    <a href="<?php the_permalink() ?>"><img src="
                        <?php 
                        $thumb_url = wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()), 'full' );
                        echo $thumb_url;
                        ?>" class="glitch_respImg" /></a>
                        <br /><a href="<?php the_permalink() ?>"><?php
                        $post_title = glitch_convertToTermType(get_the_title());
                        echo $post_title;
                    ?></a>.ogg</p>
                    <?php 
                        endwhile;
                        wp_reset_postdata();
                    ?>
                    <?php
                } elseif ($serviceType == "commission") {
                    ?><!-- Latest Art -->
                    <?php 
                    $args = array(
                        'post_type'              => array( 'portfolio' ),
                        'posts_per_page'         => '1',
                    );

                    $latest_photo = new WP_Query( $args ); 
                    while ($latest_photo -> have_posts()) : $latest_photo -> the_post(); ?>
                    <p class="glitch_termType font_lowercase">
                    <a href="<?php the_permalink() ?>"><img src="
                        <?php 
                        $thumb_url = wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()), 'full' );
                        echo $thumb_url;
                        ?>" class="glitch_respImg" /></a>
                        <br /><a href="<?php the_permalink() ?>"><?php
                        $post_title = glitch_convertToTermType(get_the_title());
                        echo $post_title;
                    ?></a>.jpg</p>
                    <?php 
                        endwhile;
                        wp_reset_postdata();
                    ?>
                    <?php
                }
            ?>
        </div>
    </div>

    <div class="glitch_container">
        <div class="glitch_column center">
        <?php 
            $rate1Title = get_field("rate_1_title");
            $rate1Rate = get_field("rate_1_rate");
            $rate1RateType = get_field("rate_1_rate_type");
            $rate1Disclaimer = get_field("rate_1_disclaimer");
            $rate1Description = get_field("rate_1_description");
        ?>

        <h4><?php echo $rate1Title; ?></h4>
        <h5 class="glitch_massiveType"><?php echo $rate1Rate; ?></h5>
        <?php 
            if ($rate1RateType) {
                echo '<p>' . $rate1RateType . '</p>';
            }
        ?>
        <p><em><?php echo $rate1Disclaimer; ?></em></p>
        <?php echo $rate1Description; ?>

        <a href="<?php echo get_site_url(); ?>/contact" class="btn btn-primary">Contact WFL</a>
        </div>

        <div class="glitch_column center">
        <?php 
            $rate2Title = get_field("rate_2_title");
            $rate2Rate = get_field("rate_2_rate");
            $rate2RateType = get_field("rate_2_rate_type");
            $rate2Disclaimer = get_field("rate_2_disclaimer");
            $rate2Description = get_field("rate_2_description");
        ?>

        <h4><?php echo $rate2Title; ?></h4>
        <h5 class="glitch_massiveType"><?php echo $rate2Rate; ?></h5>
        <?php 
            if ($rate2RateType) {
                echo '<p>' . $rate2RateType . '</p>';
            }
        ?>
        <p><em><?php echo $rate2Disclaimer; ?></em></p>
        <?php echo $rate2Description; ?>
        <a href="<?php echo get_site_url(); ?>/contact" class="btn btn-primary">Contact WFL</a>
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