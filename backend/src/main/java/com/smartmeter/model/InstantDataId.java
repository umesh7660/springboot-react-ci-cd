package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.Embeddable;

/**
 * InstantDataId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class InstantDataId implements java.io.Serializable {


    // Fields    

     private static final long serialVersionUID = 1L;
	private String meterNo;
     private Timestamp instantDate;


    // Constructors

    /** default constructor */
    public InstantDataId() {
    }

    
    /** full constructor */
    public InstantDataId(String meterNo, Timestamp instantDate) {
        this.meterNo = meterNo;
        this.instantDate = instantDate;
    }

   
    // Property accessors

    public String getMeterNo() {
        return this.meterNo;
    }
    
    public void setMeterNo(String meterNo) {
        this.meterNo = meterNo;
    }

    public Timestamp getInstantDate() {
        return this.instantDate;
    }
    
    public void setInstantDate(Timestamp instantDate) {
        this.instantDate = instantDate;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof InstantDataId) ) return false;
		 InstantDataId castOther = ( InstantDataId ) other; 
         
		 return ( (this.getMeterNo()==castOther.getMeterNo()) || ( this.getMeterNo()!=null && castOther.getMeterNo()!=null && this.getMeterNo().equals(castOther.getMeterNo()) ) )
 && ( (this.getInstantDate()==castOther.getInstantDate()) || ( this.getInstantDate()!=null && castOther.getInstantDate()!=null && this.getInstantDate().equals(castOther.getInstantDate()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getMeterNo() == null ? 0 : this.getMeterNo().hashCode() );
         result = 37 * result + ( getInstantDate() == null ? 0 : this.getInstantDate().hashCode() );
         return result;
   }   


}