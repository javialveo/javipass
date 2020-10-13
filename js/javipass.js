/*
 * Copyright 2020 Eduardo Alveo <javialveo7@gmail.com>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 */

/* Función encargada de generar claves aleatorias */
function generarClaves(rango)
{
  let valorAlfaSimbolico = "abcdefghijklmnopq123456789!@%&$?ABCDEFGHIJKLMNOPQ";
  
  let valorAleatorio = new Number();
  let claveGenerada = new String();
  
  for(let i = 0; i < rango; i++)
  {
    valorAleatorio = parseInt(Math.random() * valorAlfaSimbolico.length);
    claveGenerada += valorAlfaSimbolico.charAt(valorAleatorio);
  }
  
  return claveGenerada;
} // fin de la función generarClaves

/* Función creada para interactuar con los elementos HTMl */
function mostrarClave()
{
  let miCampoClaves = document.getElementById("zonaClaves");
  let rangoClave = document.getElementById("rango"); // Obtiene el rango deseado por el usuario para su clave, entre 6 y 50 caracteres.
  
  miCampoClaves.textContent = generarClaves(parseInt(rangoClave.value));
} // fin de la función mostrarClave

/* Función creada para actuar como función main o punto de llamado a otras funciones */
window.onload = function()
{
  let mibotonGenera = document.getElementById("btnGenerar");
  
  mostrarClave();// genero una clave al cargar la web.
  
  mibotonGenera.onclick = mostrarClave;
} // fin de la función window.onload
