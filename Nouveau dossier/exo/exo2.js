// version debutant
// $('#dropdown').change(function() {
//     var selectedOption = $(this).val();
//     var message = '';
  
//     switch (selectedOption) {
//         case '1':
//             message = 'Vous avez sélectionné l\'option 1.';
//             break;
//         case '2':
//             message = 'Vous avez sélectionné l\'option 2.';
//             break;
//         case '3':
//             message = 'Vous avez sélectionné l\'option 3.';
//             break;
//     }
//     $('#message').text(message);
// });

// version intermediaire
// $("#dropdown").on("change", () => {
//     $("#message").text("Vous avez choisi l'option " + $("#dropdown").val());
// });

//
// $("#dropdown").on("change", () => {
//     if ($("#dropdown").val() == 1) {
//         $("#message").text("A");
//     } else if ($("#dropdown").val() == 2) {
//         $("#message").text("B");
//     } else {
//         $("#message").text("C");
//     }
// });

// version avec javascript
document.getElementById("dropdown").addEventListener('change', () => {
    document.getElementById("message").textContent = "Vous avez choisi l'option " + document.getElementById("dropdown").value;
})