<?php
include "koneksi.php";
$id_product = $_POST['id_product'];
$name_product = $_POST['name_product'];
$price_product = $_POST['price_product'];
$id_category = $_POST['id_category'];
$id_cashier = $_POST['id_cashier'];

$modal = mysqli_query($koneksi, "UPDATE tbl_product SET name_product = '$name_product',price_product = '$price_product', id_category = '$id_category', id_cashier = '$id_cashier' WHERE id_product = '$id_product'");
header('location:index.php');
