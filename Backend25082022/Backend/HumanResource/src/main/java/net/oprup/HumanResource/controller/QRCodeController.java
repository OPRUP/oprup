package net.oprup.HumanResource.controller;

import net.oprup.HumanResource.model.Invoice;
import net.oprup.HumanResource.repo.QRCodeService;
import org.apache.commons.codec.DecoderException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

@Controller
@RequestMapping("/qrcode")
@CrossOrigin(origins = "*")
public class QRCodeController {
    @Autowired
    private QRCodeService qrCodeService;

    @GetMapping("/all")
    public ResponseEntity<List<Invoice>> getAllInvoices(){
        List<Invoice> invoices = qrCodeService.findAllInvoices();
        return new ResponseEntity<>(invoices, HttpStatus.OK);
    }

    @GetMapping("/find/{invoiceId}")
    public ResponseEntity<Invoice> getInvoiceByInvoiceId(@PathVariable("invoiceId") Long invoiceId){
        Invoice invoice = qrCodeService.findInvoiceById(invoiceId);
        return new ResponseEntity<>(invoice, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Invoice> addInvoice(@RequestBody Invoice invoice){
        Invoice newInvoice = qrCodeService.addInvoice(invoice);
        return new ResponseEntity<>(newInvoice, HttpStatus.CREATED);
    }


    @GetMapping("/generateQRCode/{customerName}/{taxNo}/{invoiceDate}/{price}/{tax}")
    public void generateQRCode(@PathVariable("customerName") String qrContent1, @PathVariable("taxNo") String qrContent2, @PathVariable("invoiceDate") String qrContent3, @PathVariable("price") String qrContent4, @PathVariable("tax") String qrContent5, Model model, HttpServletResponse response) throws IOException, DecoderException {

        model.addAttribute("os", "?qrContent="+qrContent1);
//        qrContent= "?qrContent="+qrContent;
        response.setContentType("image/png");
        byte[] qrCode = qrCodeService.generateQRCode(qrContent1,qrContent2,qrContent3,qrContent4,qrContent5, 200, 200);
        OutputStream outputStream = response.getOutputStream();
        outputStream.write(qrCode);
    }
}


