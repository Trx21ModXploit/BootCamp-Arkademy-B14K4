<?php
include "koneksi.php";
$id_product = $_GET['id_product'];
$modal = mysqli_query($koneksi, "Delete FROM tbl_product WHERE id_product='$id_product'");
header('location:index.php');
