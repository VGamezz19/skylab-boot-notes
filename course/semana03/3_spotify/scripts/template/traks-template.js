//Template Card
function addTraksTemplate(res) {
    var listTraksTemplate = '';
    var count = 0;

    listTraksTemplate += `
    <div class="modal modal-trak fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">testh5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">`

            res.forEach(function (el) {
                listTraksTemplate += "<audio controls><source src='https://p.scdn.co/mp3-preview/8e68d484b82f96a2d1825fa14cd568e568d57006?cid=8897482848704f2a8f8d7c79726a70d4'  type='audio/mpeg'/>sjygjuggsaj</audio>"
            })

            listTraksTemplate +=` 
          </div>
        </div>
      </div>
    </div> 
    `
    return listTraksTemplate
}