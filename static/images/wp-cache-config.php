<?php
/*
WP-Cache Config Sample File

See wp-cache.php for author details.
*/

$cache_enabled = true; //Added by WP-Cache Manager
$cache_max_time = 3600; //in seconds
//$use_flock = true; // Set it tru or false if you know what to use
$cache_path = ABSPATH . 'wp-content/cache/';
$file_prefix = 'wp-cache-';

// Array of files that have 'wp-' but should still be cached 
$cache_acceptable_files = array ( 0 => 'wp-atom.php', 1 => 'wp-comments-popup.php', 2 => 'wp-commentsrss2.php', 3 => 'wp-links-opml.php', 4 => 'wp-locations.php', 5 => 'wp-rdf.php', 6 => 'wp-rss.php', 7 => 'wp-rss2.php', ); //Added by WP-Cache Manager

$cache_rejected_uri = array('wp-');
$cache_rejected_user_agent = array ( 0 => 'bot', 1 => 'ia_archive', 2 => 'slurp', 3 => 'crawl', 4 => 'spider');

// Just modify it if you have conflicts with semaphores
$sem_id = 5419;

if ( '/' != substr($cache_path, -1)) {
	$cache_path .= '/';
}

?>
