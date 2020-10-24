function prefecture(res){
   google.load("visualization", "1", {"packages":["corechart"]});     
   google.setOnLoadCallback(drawChart); 
   function drawChart() {         
      var data = google.visualization.arrayToDataTable([
         ["県", "感染者数"],
         ["北海道", res["0"].cases],
         ["青森県", res["1"].cases],
         ["岩手県", res["2"].cases],
         ["宮城県", res["3"].cases],
         ["秋田県", res["4"].cases],
         ["山形県", res["5"].cases],
         ["福島県", res["6"].cases],
         ["茨城県", res["7"].cases],
         ["栃木県", res["8"].cases],
         ["群馬県", res["9"].cases],
         ["埼玉県", res["10"].cases],
         ["千葉県", res["11"].cases],
         ["東京都", res["12"].cases],
         ["神奈川県", res["13"].cases],
         ["新潟県", res["14"].cases],
         ["富山県", res["15"].cases],
         ["石川県", res["16"].cases],
         ["福島県", res["17"].cases],
         ["山形県", res["18"].cases],
         ["長野県", res["19"].cases],
         ["岐阜県", res["20"].cases],
         ["静岡県", res["21"].cases],
         ["愛知県", res["22"].cases],
         ["三重県", res["23"].cases],
         ["滋賀県", res["24"].cases],
         ["京都府", res["25"].cases],
         ["大阪府", res["26"].cases],
         ["兵庫県", res["27"].cases],
         ["奈良県", res["28"].cases],
         ["和歌山県", res["29"].cases],
         ["鳥取県", res["30"].cases],
         ["島根県", res["31"].cases],
         ["岡山県", res["32"].cases],
         ["広島県", res["33"].cases],
         ["山形県", res["34"].cases],
         ["徳島県", res["35"].cases],
         ["香川県", res["36"].cases],
         ["愛媛県", res["37"].cases],
         ["高知県", res["38"].cases],
         ["福岡県", res["39"].cases],
         ["佐賀県", res["40"].cases],
         ["長崎県", res["41"].cases],
         ["熊本県", res["42"].cases],
         ["大分県", res["43"].cases],
         ["宮崎県", res["44"].cases],
         ["鹿児島県", res["45"].cases],
         ["沖縄県", res["46"].cases],
      ]);
   
      var options = {
         title: "各県の感染状況",
      };
   
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));    
      chart.draw(data, options);
   }
}

  