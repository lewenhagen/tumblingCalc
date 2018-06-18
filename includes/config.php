<?php
$name = substr(preg_replace('/[^a-z\d]/i', '', __DIR__), -30);
session_name($name);
session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

error_reporting(E_ALL);

$hash = "$2y$10\$cVVbomat1zJ95zOPuXD96u/jaVzO9zHu/tHpJyp8fY6m4DTWvYRzO";
