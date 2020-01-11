<form action="<?php echo get_site_url(); ?>" method="get">
    <label for="search"><span class="glitch_termType">guest@classicwfl.com:<a href="<?php echo get_site_url(); ?>">~</a>$ find . -type f -print | xargs grep </span></label>
    <input type="text" name="s" id="search" value="<?php the_search_query(); ?>" class="glitch_searchContainer__searchField" />
    <input type="submit" class="btn"
        value="<?php echo esc_attr_x( 'Search', 'submit button' ) ?>" />
</form>